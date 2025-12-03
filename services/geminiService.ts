import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: In a real environment, ensure process.env.API_KEY is set.
// For this demo, we assume the environment variable is injected.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTattooConcept = async (userIdea: string, style: string) => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a world-class tattoo artist assistant named "Mi AI".
      The user wants a tattoo concept based on this idea: "${userIdea}".
      The preferred style is: "${style}".
      
      Please provide a creative, artistic description of a tattoo design that combines these elements.
      Keep the tone mysterious, artistic, and professional. 
      Structure the response as:
      1. Visual Imagery (What it looks like)
      2. Symbolic Meaning (The deeper story)
      3. Placement Suggestion (Where it fits best on the body)
      
      Keep it under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Flash tasks don't need thinking
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini generation error:", error);
    return "The spirits are silent right now. Please try again later.";
  }
};