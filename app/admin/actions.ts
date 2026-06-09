"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/types";

/** Update a lead's pipeline status. Runs as the logged-in user (RLS enforced). */
export async function updateLeadStatus(id: string, status: LeadStatus) {
  if (!LEAD_STATUSES.includes(status)) return { ok: false };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false };

  const { error } = await supabase.from("leads").update({ status }).eq("id", id);
  if (error) return { ok: false };

  revalidatePath("/admin");
  return { ok: true };
}

/** Save private notes on a lead. */
export async function updateLeadNotes(id: string, notes: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false };

  const { error } = await supabase
    .from("leads")
    .update({ notes: notes.slice(0, 5000) })
    .eq("id", id);
  if (error) return { ok: false };

  revalidatePath("/admin");
  return { ok: true };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
