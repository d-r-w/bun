import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const model = google("gemini-1.5-pro-exp-0827");

const server = Bun.serve({
  port: 3001,
  async fetch(req) {
    const params = new URL(req.url).searchParams;
    const prompt = params.get("prompt");

    if (!prompt) {
      return new Response("prompt=?");
    }

    const modelResponse = (await generateText({ model, prompt })).text;

    return new Response(modelResponse);
  }
});

console.log(`Listening on http://localhost:${server.port} ...`);
