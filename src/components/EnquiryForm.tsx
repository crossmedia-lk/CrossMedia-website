
import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent, useEffect } from "react";
import { X, CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    organisation?: string;
    about?: string;
    objective?: string;
  };
}

export default function EnquiryForm({ isOpen, onClose, initialData }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    organisation: initialData?.organisation || "",
    email: "",
    phone: "",
    about: initialData?.about || "",
    objective: initialData?.objective || "",
    timing: "",
    additional: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        organisation: initialData?.organisation || "",
        email: "",
        phone: "",
        about: initialData?.about || "",
        objective: initialData?.objective || "",
        timing: "",
        additional: "",
      });
      setSubmitted(false);
      setError(null);
    }
  }, [isOpen, initialData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.organisation || !formData.email || !formData.phone || !formData.about) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.about.length < 20) {
      setError("Please tell us a bit more about your organisation (at least 20 characters).");
      return;
    }

    setLoading(true);
    setError(null);
    setStatus("Connecting...");
    
    try {
      setStatus("Processing...");
      
      // 1. Create the promises but don't await them sequentially
      const firestorePromise = addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
        source: "website_enquiry_form",
        system_version: "v1.2.4"
      });

      const emailPromise = (async () => {
        try {
          const response = await fetch("/api/enquire", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (response.ok) return "Resend Success";
          
          if (response.status === 404) {
            // Fallback to EmailJS
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
              await emailjs.send(serviceId, templateId, {
                to_name: "CrossMedia Team",
                from_name: formData.name,
                organisation: formData.organisation,
                email: formData.email,
                phone: formData.phone,
                about: formData.about,
                objective: formData.objective,
                timing: formData.timing,
                additional: formData.additional || "None",
                reply_to: formData.email,
              }, publicKey);
              return "EmailJS Success";
            }
          }
          return "Email Skipped/Failed";
        } catch (err) {
          console.warn("Email delivery failed:", err);
          return "Email Error";
        }
      })();

      // 2. Race the core logic against a global timeout
      // We prioritize the SUCCESS of the user experience
      await Promise.race([
        Promise.all([firestorePromise, emailPromise]),
        new Promise((_, reject) => setTimeout(() => reject(new Error("The request is taking longer than expected, but we are still processing it.")), 12000))
      ]);
      
      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission Error:", err);
      // If it's just a timeout, we still show success because the background promises are likely still running
      if (err.message?.includes("taking longer")) {
        setSubmitted(true);
      } else {
        setError(err.message || "Something went wrong. Please try again or contact us directly.");
      }
    } finally {
      setLoading(false);
      setStatus(null);
    }
  };

  const objectives = [
    "Tell our story",
    "Introduce our organisation",
    "Celebrate our journey",
    "Showcase our people and impact",
    "Preserve our history",
    "Other"
  ];

  const timings = [
    "As soon as possible",
    "Within 1–3 months",
    "Within 3–6 months",
    "Just exploring"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-aurora backdrop-blur-xl border border-white/10 rounded-none overflow-hidden max-h-[90vh] flex flex-col text-white shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-primary-orange transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12 overflow-y-auto">
              {!submitted ? (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4 uppercase">
                      START THE CONVERSATION.
                    </h2>
                    <p className="text-white/60 font-medium">
                      Tell us about your organisation and the story you want to tell.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Full Name *</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 p-4 focus:ring-2 focus:ring-primary-orange outline-none transition-all text-white placeholder:text-white/20"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Organisation *</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 p-4 focus:ring-2 focus:ring-primary-orange outline-none transition-all text-white placeholder:text-white/20"
                          placeholder="Company Name"
                          value={formData.organisation}
                          onChange={(e) => setFormData({...formData, organisation: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Email Address *</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-white/5 border border-white/10 p-4 focus:ring-2 focus:ring-primary-orange outline-none transition-all text-white placeholder:text-white/20"
                          placeholder="email@organisation.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Phone / WhatsApp *</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-white/5 border border-white/10 p-4 focus:ring-2 focus:ring-primary-orange outline-none transition-all text-white placeholder:text-white/20"
                          placeholder="+94 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Tell us about your organisation *</label>
                      <textarea 
                        required
                        className="w-full bg-white/5 border border-white/10 p-4 focus:ring-2 focus:ring-primary-orange outline-none transition-all min-h-[120px] text-white placeholder:text-white/20"
                        placeholder="What do you do? What makes you unique?"
                        value={formData.about}
                        onChange={(e) => setFormData({...formData, about: e.target.value})}
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">What would you like the film to achieve?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {objectives.map((obj) => (
                          <button
                            key={obj}
                            type="button"
                            onClick={() => setFormData({...formData, objective: obj})}
                            className={`text-left p-4 text-xs font-bold transition-all border ${
                              formData.objective === obj 
                                ? "bg-primary-orange border-primary-orange text-white" 
                                : "bg-white/5 border-white/10 text-white/60 hover:border-primary-orange/30"
                            }`}
                          >
                            {obj}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">When are you hoping to create the film?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {timings.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({...formData, timing: time})}
                            className={`text-left p-4 text-xs font-bold transition-all border ${
                              formData.timing === time 
                                ? "bg-primary-orange border-primary-orange text-white" 
                                : "bg-white/5 border-white/10 text-white/60 hover:border-primary-orange/30"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Anything else you'd like us to know?</label>
                      <textarea 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:ring-2 focus:ring-primary-orange outline-none transition-all min-h-[80px] text-white placeholder:text-white/20"
                        placeholder="Additional details..."
                        value={formData.additional}
                        onChange={(e) => setFormData({...formData, additional: e.target.value})}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full bg-white text-charcoal py-6 font-black tracking-[0.3em] uppercase transition-all hover:bg-primary-orange hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={24} />
                          {status || "SENDING..."}
                        </>
                      ) : (
                        "START THE CONVERSATION"
                      )}
                    </motion.button>
                    {error && (
                      <p className="text-red-500 text-xs font-bold text-center uppercase tracking-widest mt-4">
                        {error}
                      </p>
                    )}
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-orange/10 text-primary-orange mb-6">
                    <CheckCircle2 size={56} />
                  </div>
                  <h2 className="text-5xl font-black tracking-tighter text-white uppercase">THANK YOU.</h2>
                  <p className="text-xl font-medium text-white/60 max-w-sm mx-auto">
                    YOUR STORY STARTS HERE.
                  </p>
                  <p className="text-sm font-medium text-white/40 max-w-sm mx-auto">
                    “Thank you for telling us a little about your organisation. We’ll be in touch to explore the story worth telling.”
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-12 bg-white text-charcoal px-10 py-4 text-xs font-black tracking-widest uppercase hover:bg-primary-orange hover:text-white transition-all"
                  >
                    BACK TO CROSSMEDIA
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
