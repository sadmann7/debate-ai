export type OpenAIStreamPayload = {
  model:
    | "gpt-3.5-turbo"
    | "text-davinci-003"
    | "text-curie-001"
    | "text-babbage-001"
    | "text-ada-001";
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  stream: boolean;
  n: number;
};
