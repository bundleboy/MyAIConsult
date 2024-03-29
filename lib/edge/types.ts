import type {
  ChatCompletionCreateParamsStreaming,
} from "https://deno.land/x/openai@v4.25.0/resources/mod.ts";

import type { Context } from "https://edge.netlify.com/";
export interface AppConfig {
  // The maximum number of message in the history to send to the API
  historyLength: number;

  // The maximum length of each message sent to the API
  maxMessageLength: number;

  // See https://platform.openai.com/account/api-keys
  OPENAI_API_KEY: string;

  // This is where the magic happens. See the README for details
  systemPrompt:
    | string
    | ((request: Request, Context: Context) => string | Promise<string>);

  // See https://platform.openai.com/docs/api-reference/chat/create
  apiConfig: Omit<ChatCompletionCreateParamsStreaming, "stream" | "messages">;
}
