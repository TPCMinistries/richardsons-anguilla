"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Incorrect email or password. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Richardson Anguilla
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-navy">
            Booking Dashboard
          </h1>
          <p className="mt-1 text-sm text-navy/50">Sign in to manage your enquiries</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-navy/10 bg-white p-8 shadow-premium"
        >
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 text-sm text-navy transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-navy/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 text-sm text-navy transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-orange px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange/20 transition-all hover:bg-orange-dark disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
