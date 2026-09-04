import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Resend
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  // Initialize Gemini
  const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  }) : null;

  // API Routes
  app.post("/api/enquire", async (req, res) => {
    console.log("Received enquiry request:", req.body.email);
    
    if (!resend) {
      console.error("Enquiry failed: RESEND_API_KEY is not set.");
      return res.status(500).json({ error: "Email service not configured. Please ensure RESEND_API_KEY is set in settings." });
    }

    const { name, organisation, email, phone, about, objective, timing, additional } = req.body;

    try {
      const recipient = "crossmedia.ask@gmail.com".toLowerCase();
      console.log(`Attempting to send email to ${recipient}...`);
      
      const emailHtml = `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #FF5C00; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">New Story Film Enquiry</h2>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Organisation:</strong> ${organisation}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="text-transform: uppercase; font-size: 11px; font-weight: bold; color: #666; margin-bottom: 5px;">About the Organisation</p>
              <p style="margin-top: 0;">${about}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="text-transform: uppercase; font-size: 11px; font-weight: bold; color: #666; margin-bottom: 5px;">Objective</p>
              <p style="margin-top: 0;">${objective}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="text-transform: uppercase; font-size: 11px; font-weight: bold; color: #666; margin-bottom: 5px;">Desired Timing</p>
              <p style="margin-top: 0;">${timing}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="text-transform: uppercase; font-size: 11px; font-weight: bold; color: #666; margin-bottom: 5px;">Additional Information</p>
              <p style="margin-top: 0;">${additional || "None provided"}</p>
            </div>
          </div>
        `;

      // Add a timeout to the Resend call to prevent hanging
      const emailPromise = resend.emails.send({
        from: "CrossMedia Enquiries <onboarding@resend.dev>",
        to: [recipient],
        replyTo: email,
        subject: `NEW CROSSMEDIA STORY FILM ENQUIRY — ${organisation}`,
        html: emailHtml,
      });

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Email service timed out")), 10000)
      );

      const result: any = await Promise.race([emailPromise, timeoutPromise]);
      const data = result?.data || result;
      const error = result?.error;

      if (error) {
        console.error("Resend API Error details:", JSON.stringify(error, null, 2));
        return res.status(400).json({ error: typeof error === 'string' ? error : error.message });
      }

      console.log("Enquiry email success. Resend ID:", data?.id);
      res.status(200).json({ success: true, id: data?.id });
    } catch (err: any) {
      console.error("Internal Server Error during enquiry:", err);
      res.status(500).json({ error: err.message || "A server error occurred while sending your enquiry." });
    }
  });

  app.post("/api/advisor", async (req, res) => {
    if (!ai) {
      return res.status(500).json({ error: "AI service not configured" });
    }

    const { messages } = req.body;

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

      GUARDRAILS:
      - Stay focused on organisational storytelling and CrossMedia's Story Film offering.
      - No legal or financial advice.
      - Do not invent company info, awards, or achievements.
      - Do not promise guaranteed business results.
      - If off-topic, politely redirect.

      IMPORTANT: When you are ready to provide the final assessment, wrap it in a JSON block or a clear delimiter so the UI can detect it's the final output and show the "TALK TO CROSSMEDIA" button. Actually, just provide it as the final message, and the UI will handle it.
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: messages,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.status(200).json({ text: response.text });
    } catch (err) {
      console.error("Error in AI advisor:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
