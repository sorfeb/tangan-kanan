export async function queryGemini(query: string, context: any) {
  const response = await fetch("https://api.mcp-gemini.com/v1/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
    },
    body: JSON.stringify({ query, context }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from Gemini LLM");
  }

  return response.json();
}