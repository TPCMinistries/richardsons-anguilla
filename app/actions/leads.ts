"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export type LeadInput = {
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  travel_dates?: string;
  children?: string;
  message?: string;
  // honeypot — must be empty
  company?: string;
};

/** Public website lead capture. Writes via service role so RLS stays fully locked. */
export async function createLead(input: LeadInput): Promise<{ ok: boolean }> {
  // Silently drop bot submissions that fill the hidden honeypot field.
  if (input.company && input.company.trim() !== "") return { ok: true };

  const name = (input.name || "").trim();
  if (!name) return { ok: false };

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("leads").insert({
      name: name.slice(0, 200),
      email: input.email?.trim().slice(0, 200) || null,
      phone: input.phone?.trim().slice(0, 50) || null,
      service: input.service?.trim().slice(0, 200) || null,
      travel_dates: input.travel_dates?.trim().slice(0, 200) || null,
      children: input.children?.trim().slice(0, 200) || null,
      message: input.message?.trim().slice(0, 5000) || null,
      source: "website",
    });
    if (error) {
      console.error("createLead insert error:", error.message);
      return { ok: false };
    }
    return { ok: true };
  } catch (e) {
    console.error("createLead failed:", e);
    return { ok: false };
  }
}
