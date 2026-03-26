import { NextRequest, NextResponse } from 'next/server';

const CORRECT_PIN   = '0806';
const VALID_TOKEN   = 'flexiti_admin_0806';
const COOKIE_NAME   = 'admin_auth';
// 7-day session
const MAX_AGE_SECS  = 60 * 60 * 24 * 7;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { pin } = body as { pin?: string };

  if (pin !== CORRECT_PIN) {
    return NextResponse.json({ ok: false, message: 'Incorrect PIN.' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, VALID_TOKEN, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   MAX_AGE_SECS,
    path:     '/',
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete('admin_auth');
  return res;
}
