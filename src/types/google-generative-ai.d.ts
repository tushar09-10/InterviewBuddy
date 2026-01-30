// Minimal type declarations to satisfy TypeScript for @google/generative-ai.
// This avoids compile-time errors while still allowing the real library
// (which is already installed) to work at runtime.

declare module "@google/generative-ai" {
  export const HarmCategory: any;
  export const HarmBlockThreshold: any;

  export class GoogleGenerativeAI {
    constructor(apiKey: string);
    getGenerativeModel(options: { model: string }): {
      startChat(config?: {
        generationConfig?: any;
        safetySettings?: any;
      }): {
        sendMessage(prompt: string): Promise<any>;
      };
    };
  }
}


