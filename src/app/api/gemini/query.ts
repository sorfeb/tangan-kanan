import { NextApiRequest, NextApiResponse } from "next";
import { buildMCPContext } from "@/context/MCPUtils";
import { queryGemini } from "@/services/geminiService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userId, topic, query } = req.body;

  if (!query || !topic) {
    return res.status(400).json({ error: "Query and topic are required" });
  }

  try {
    // Build MCP context
    const context = await buildMCPContext(userId, topic);

    // Query Gemini LLM
    const response = await queryGemini(query, context);

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}