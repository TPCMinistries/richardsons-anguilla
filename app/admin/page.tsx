import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Lead } from "@/lib/types";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <AdminDashboard leads={(leads as Lead[]) ?? []} userEmail={user.email ?? ""} />
  );
}
