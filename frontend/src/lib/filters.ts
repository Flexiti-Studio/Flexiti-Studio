export function toPositiveInt(value: string | null, fallback: number): number {
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return fallback;
  return Math.floor(num);
}

export function normalize(value: string | null): string {
  return (value ?? '').trim().toLowerCase();
}
