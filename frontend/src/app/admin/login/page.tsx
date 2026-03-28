'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const [digits, setDigits]   = useState(['', '', '', '']);
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const [shake, setShake]     = useState(false);
  const inputRefs             = useRef<(HTMLInputElement | null)[]>([]);
  const router                = useRouter();
  const searchParams          = useSearchParams();
  const from                  = searchParams.get('from') ?? '/admin/memes';

  // Auto-focus first box
  useEffect(() => { inputRefs.current[0]?.focus(); }, []);

  function handleChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...digits];
    next[index] = value;
    setDigits(next);
    setError('');

    // Auto-advance
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 4 filled
    if (value && next.every((d) => d !== '')) {
      submit(next.join(''));
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  async function submit(pin: string) {
    setLoading(true);
    const res  = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin }),
    });
    setLoading(false);

    if (res.ok) {
      router.push(from);
    } else {
      setError('Incorrect PIN. Try again.');
      setShake(true);
      setDigits(['', '', '', '']);
      setTimeout(() => { setShake(false); inputRefs.current[0]?.focus(); }, 600);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="bg-surface-container-lowest rounded-3xl shadow-2xl shadow-black/10 border border-white/60 p-10 text-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              lock
            </span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-on-surface mb-1 font-headline">
            Admin Access
          </h1>
          <p className="text-sm text-outline mb-8">
            Enter your 4-digit PIN to continue
          </p>

          {/* PIN Boxes */}
          <div className={`flex justify-center gap-4 mb-6 transition-all ${shake ? 'animate-bounce' : ''}`}>
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`w-14 h-14 text-center text-2xl font-black rounded-2xl border-2 outline-none transition-all
                  bg-surface-container-low
                  ${d ? 'border-primary shadow-md shadow-primary/20 scale-105' : 'border-outline-variant'}
                  ${error ? 'border-error' : ''}
                  focus:border-primary focus:shadow-md focus:shadow-primary/20 focus:scale-105`}
              />
            ))}
          </div>

          {/* Error */}
          {error && (
            <p className="text-error text-xs font-bold mb-4 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">error</span>
              {error}
            </p>
          )}

          {/* Loading */}
          {loading && (
            <p className="text-primary text-xs font-bold animate-pulse mb-4">
              Verifying…
            </p>
          )}

          {/* Manual submit */}
          <button
            onClick={() => {
              const pin = digits.join('');
              if (pin.length === 4) submit(pin);
            }}
            disabled={digits.some((d) => d === '') || loading}
            className="w-full bg-primary text-on-primary py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Checking…' : 'Unlock Admin'}
          </button>

          <p className="text-[11px] text-outline mt-6">
            Protected area — Flexiti Studio
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
