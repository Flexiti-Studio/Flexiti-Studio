import OpenAI from 'openai';

// Lazily initialised so missing env var only throws at request time, not build time.
let _openai: OpenAI | null = null;

export function getOpenAI(): OpenAI {
  if (!_openai) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) throw new Error('Missing OPENAI_API_KEY environment variable');
    _openai = new OpenAI({ apiKey: key });
  }
  return _openai;
}

// Convenience re-export for callers that prefer a default instance.
// At module load this is undefined; access via getOpenAI() in route handlers.
export { _openai as openai };
