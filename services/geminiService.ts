import { GoogleGenAI } from "@google/genai";

/**
 * Generates a creative tattoo concept based on the user's idea and preferred style.
 * Uses the Gemini Flash model for fast and creative text generation.
 * 
 * @param idea - The user's description of their tattoo idea.
 * @param style - The preferred artistic style (e.g., Fineline, Blackwork).
 * @returns A promise that resolves to the generated concept text or null if an error occurs.
 */
export const generateTattooConcept = async (idea: string, style: string): Promise<string | null> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API Key is missing. AI features will be disabled.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Using gemini-2.5-flash as recommended for text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Você é a 'Mi AI', uma consultora virtual de tatuagem especializada no estúdio Mikaelian.
        Seu tom é artístico, empático e profissional.
        
        O cliente deseja uma tatuagem com a seguinte ideia: "${idea}"
        Estilo preferido: "${style}"
        
        Crie um conceito curto e inspirador (máximo de 150 palavras) descrevendo como essa tatuagem poderia ser visualizada na pele, sugerindo elementos de composição que valorizem o estilo escolhido.
        Responda em português.
      `,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating tattoo concept:", error);
    return null;
  }
};