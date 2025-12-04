import { GoogleGenAI } from "@google/genai";

// Function to call Gemini API
export const generateTattooConcept = async (userIdea: string, style: string) => {
  try {
    // Initialize Gemini INSIDE the function.
    // This prevents "process is not defined" or missing API key errors during build time/initial load on Vercel.
    // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
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
      
      Keep it under 150 words. Translate the response to Portuguese (Brazil).
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
    return "Os espíritos estão silenciosos agora. Verifique sua chave de API ou tente novamente mais tarde.";
  }
};