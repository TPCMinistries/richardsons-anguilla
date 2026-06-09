"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ChangePasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }

    setStatus("saving");
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setStatus("idle");
      return;
    }

    setPassword("");
    setConfirm("");
    setStatus("done");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-navy/10 bg-white p-8 shadow-sm"
    >
      <div>
        <label htmlFor="new-password" className="mb-1.5 block text-sm font-medium text-navy/70">
          New password
        </label>
        <input
          id="new-password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setStatus("idle");
          }}
          className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 text-sm text-navy transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          placeholder="At least 8 characters"
        />
      </div>

      <div>
        <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium text-navy/70">
          Confirm new password
        </label>
        <input
          id="confirm-password"
          type="password"
          autoComplete="new-password"
          required
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            setStatus("idle");
          }}
          className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 text-sm text-navy transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          placeholder="Re-type your new password"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {status === "done" && (
        <p className="text-sm text-green-600">
          Password updated ✓ Use it the next time you sign in.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="w-full rounded-xl bg-orange px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange/20 transition-all hover:bg-orange-dark disabled:opacity-60"
      >
        {status === "saving" ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}
