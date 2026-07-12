export interface GenerateOptions {
  temperature?: number;
  maxTokens?: number;
  signal?: AbortSignal;
}

export interface IAIService {
  generateText(prompt: string, options?: GenerateOptions): Promise<string>;
}

export function getAIService(): IAIService {
  const provider = process.env.AI_PROVIDER || "ollama";

  if (provider === "gemini") {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured in environment variables.");
    }
    const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
    return {
      generateText: async (prompt, options) => {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: options?.temperature ?? 0.7,
                maxOutputTokens: options?.maxTokens ?? 1000,
              },
            }),
            signal: options?.signal,
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
          throw new Error("No response content returned from Gemini API");
        }
        return text;
      },
    };
  }

  if (provider === "openai") {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not configured in environment variables.");
    }
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const apiUrl = process.env.OPENAI_API_URL || "https://api.openai.com/v1/chat/completions";
    return {
      generateText: async (prompt, options) => {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "user", content: prompt }],
            temperature: options?.temperature ?? 0.7,
            max_tokens: options?.maxTokens ?? 1000,
          }),
          signal: options?.signal,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;
        if (!text) {
          throw new Error("No response content returned from OpenAI API");
        }
        return text;
      },
    };
  }

  // Default fallback: ollama
  const baseUrl = process.env.OLLAMA_API_URL || "http://localhost:11434";
  const model = process.env.OLLAMA_MODEL || "codellama:latest";

  return {
    generateText: async (prompt, options) => {
      const response = await fetch(`${baseUrl}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          prompt,
          stream: false,
          options: {
            temperature: options?.temperature ?? 0.7,
            num_predict: options?.maxTokens ?? 1000,
          },
        }),
        signal: options?.signal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ollama API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      if (!data.response) {
        throw new Error("No response returned from Ollama API");
      }
      return data.response;
    },
  };
}
