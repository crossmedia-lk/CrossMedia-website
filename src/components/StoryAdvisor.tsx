import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Loader2, Sparkles, User, MessageSquare } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini client-side for static hosting support
const rawApiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const apiKey = rawApiKey.trim();
const genAI = new GoogleGenerativeAI(apiKey);
const IS_KEY_PRESENT = apiKey.length > 5;
const KEY_PREFIX = apiKey.substring(0, 4);
const KEY_SUFFIX = apiKey.substring(apiKey.length - 4);

interface Message {
  role: "user" | "model";
  text: string;
}

interface StoryAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToCrossMedia: (prefill: { organisation: string; about: string; objective: string }) => void;
}

export default function StoryAdvisor({ isOpen, onClose, onTalkToCrossMedia }: StoryAdvisorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "model",
          text: `Every organisation has a story. Tell me a little about yours and I'll help you discover what makes it worth telling. (v1.1.7 - ${IS_KEY_PRESENT ? `Ready [${KEY_PREFIX}...${KEY_SUFFIX}]` : "Config Missing"}) \n\nWhat does your organisation do, and who does it serve?`
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const listModels = async () => {
    try {
      setLoading(true);
      // We have to use a raw fetch because the SDK's listModels is sometimes inconsistent in different versions
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      const data = await response.json();
      const modelNames = data.models?.map((m: any) => m.name.replace('models/', '')) || [];
      const errorStr = modelNames.length > 0 
        ? `AVAILABLE MODELS: ${modelNames.join(', ')}` 
        : `NO MODELS FOUND. DATA: ${JSON.stringify(data)}`;
      setMessages([...messages, { role: "model", text: errorStr }]);
    } catch (err: any) {
      setMessages([...messages, { role: "model", text: `LIST ERROR: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!inputValue.trim() || loading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    const newMessages = [...messages, { role: "user", text: userMessage } as Message];
    setMessages(newMessages);
    setLoading(true);

    try {
      // System instruction for the advisor
      const systemInstruction = `
        You are the CROSSMEDIA STORY ADVISOR. 
        Your purpose is to help potential clients discover if their organisation has a story worth telling and how a Story Film could solve their communication problems.
        
        PERSONALITY:
        - Intelligent, Warm, Curious, Professional, Creative, Human.
        - NOT robotic, salesy, pushy, or overly enthusiastic.
        - Avoid generic fillers like "That's amazing!" or "Great!". Respond naturally.
        - Demonstrate genuine understanding of storytelling.

        GOAL:
        - Gather information conversationally.
        - Ask a small number of intelligent questions (don't interrogate).
        - Explore: Origin, People, Challenge, Impact, Audience, Objective.
        - Do not ask every question mechanically if the visitor has already provided the information.

        ASSESSMENT PHASE:
        After you have enough information (usually after 3-5 exchanges), provide a concise personalised assessment with these sections:
        1. HEADING: "YOUR STORY HAS SOMETHING TO SAY."
        2. STORY CORE: One or two sentences identifying the central story.
        3. KEY PERSPECTIVES: Identify strongest perspectives (Founder, Leadership, Employees, Customers, Community, Partners, Beneficiaries, Next generation).
        4. STORY OPPORTUNITY: Explain what could make the story compelling.
        5. COMMUNICATION OPPORTUNITY: Explain what problem the Story Film could help address.
        6. FILM DIRECTION: Suggest a possible storytelling approach.

        IMPORTANT: When you are ready to provide the final assessment, wrap it in a clear delimiter or just provide it as the final message. The UI will detect the heading "YOUR STORY HAS SOMETHING TO SAY." to show the "TALK TO CROSSMEDIA" button.
      `;

      // v1.1.6: Final Discovery Loop - Try every possible model variant
      const modelConfigs = [
        { name: "gemini-1.5-flash", version: "v1beta" },
        { name: "gemini-1.5-flash-8b", version: "v1beta" },
        { name: "gemini-1.5-pro", version: "v1beta" },
        { name: "gemini-1.5-flash-latest", version: "v1beta" },
        { name: "gemini-1.5-flash", version: "v1" },
        { name: "gemini-1.5-pro", version: "v1" },
        { name: "gemini-pro", version: "v1" }
      ];
      let modelResponse = "";
      let lastErr = null;

      const history = messages
        .filter((_, i) => i > 0)
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }],
        }));

      for (const config of modelConfigs) {
        try {
          const model = genAI.getGenerativeModel({ model: config.name }, { apiVersion: config.version as any });
          const chat = model.startChat({
            history,
            generationConfig: { temperature: 0.7 },
          });

          const prompt = messages.length <= 2 
            ? `${systemInstruction}\n\nUser Information: ${userMessage}`
            : userMessage;

          const result = await chat.sendMessage(prompt);
          modelResponse = result.response.text();
          if (modelResponse) break; // Success!
        } catch (err) {
          console.warn(`Model ${config.name} (${config.version}) failed:`, err);
          lastErr = err;
          continue; 
        }
      }

      if (!modelResponse) {
        throw lastErr || new Error("All Gemini models failed to respond.");
      }
      
      setMessages([...newMessages, { role: "model", text: modelResponse }]);

      if (modelResponse.includes("YOUR STORY HAS SOMETHING TO SAY.")) {
        setAssessment(true);
      }
    } catch (err: any) {
      console.error("Advisor error:", err);
      const errorMessage = err.message || "Unknown error";
      setMessages([...newMessages, { role: "model", text: `DIAGNOSTIC ERROR: ${errorMessage}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleTalkToCrossMedia = () => {
    // Attempt to extract organisation name and objective from conversation
    const org = messages.find(m => m.role === "user")?.text.split(" ").slice(0, 3).join(" ") || "";
    const about = messages.filter(m => m.role === "user").map(m => m.text).join("\n\n");
    
    onTalkToCrossMedia({
      organisation: org,
      about: about,
      objective: "Tell our story"
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-4xl h-[80vh] bg-aurora border border-white/10 flex flex-col text-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-orange flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-tight uppercase">The Story Advisor</h2>
                  <p className="text-[10px] font-bold tracking-widest text-primary-orange uppercase">CrossMedia Intelligence</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:text-primary-orange transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-hide">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'model' ? 'bg-white/10 text-primary-orange' : 'bg-primary-orange text-white'
                  }`}>
                    {msg.role === 'model' ? <MessageSquare size={16} /> : <User size={16} />}
                  </div>
                  <div className={`max-w-[80%] space-y-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`p-6 text-sm md:text-base font-medium leading-relaxed ${
                      msg.role === 'model' 
                        ? 'bg-white/5 border border-white/5 whitespace-pre-wrap' 
                        : 'bg-primary-orange/20 border border-primary-orange/20 text-white'
                    }`}>
                      {msg.text}
                      {idx === 0 && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <button 
                            onClick={listModels}
                            className="text-[10px] font-black tracking-[0.2em] text-primary-orange uppercase hover:opacity-70 transition-opacity flex items-center gap-2"
                          >
                            [ SCAN AVAILABLE MODELS ]
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-primary-orange flex items-center justify-center animate-pulse">
                    <MessageSquare size={16} />
                  </div>
                  <div className="bg-white/5 border border-white/5 p-6 flex items-center gap-3">
                    <Loader2 size={16} className="animate-spin text-primary-orange" />
                    <span className="text-xs font-black tracking-widest uppercase opacity-40">Advisor is thinking...</span>
                  </div>
                </div>
              )}
              {assessment && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-10 text-center space-y-8 border-t border-white/10"
                >
                  <h3 className="text-xs font-black tracking-[0.4em] text-primary-orange uppercase">Your assessment is complete</h3>
                  <p className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">"YOUR STORY DESERVES A CONVERSATION."</p>
                  <button
                    onClick={handleTalkToCrossMedia}
                    className="bg-white text-charcoal px-10 py-5 font-black tracking-[0.3em] uppercase hover:bg-primary-orange hover:text-white transition-all text-sm"
                  >
                    TALK TO CROSSMEDIA
                  </button>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!assessment && (
              <div className="p-6 md:p-8 bg-white/5 border-t border-white/5">
                <div className="relative max-w-4xl mx-auto">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Tell me about your organisation..."
                    className="w-full bg-charcoal border border-white/10 p-6 pr-20 outline-none focus:border-primary-orange transition-colors text-white font-medium"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || loading}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-primary-orange hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 transition-all"
                  >
                    <Send size={24} />
                  </button>
                </div>
                <p className="text-[10px] font-bold text-white/20 text-center mt-4 tracking-widest uppercase">The Advisor uses Gemini AI to help explore your narrative.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
