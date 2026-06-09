import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ChangePasswordForm from "./ChangePasswordForm";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="mx-auto max-w-md px-5 py-8 md:px-8">
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy/60 transition-colors hover:text-orange"
      >
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>

      <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy">
        Account
      </h1>
      <p className="mb-6 text-sm text-navy/50">Signed in as {user.email}</p>

      <h2 className="mb-3 text-sm font-semibold tracking-wide text-navy/40 uppercase">
        Change password
      </h2>
      <ChangePasswordForm />
    </div>
  );
}
