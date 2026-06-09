"use client";

import { useMemo, useState, useTransition } from "react";
import {
  LogOut,
  Mail,
  MessageCircle,
  Phone,
  Calendar,
  Users,
  Inbox,
} from "lucide-react";
import { LEAD_STATUSES, type Lead, type LeadStatus } from "@/lib/types";
import { updateLeadStatus, updateLeadNotes, signOut } from "./actions";

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-orange/15 text-orange-dark border-orange/30",
  contacted: "bg-ocean/15 text-ocean-dark border-ocean/30",
  booked: "bg-green-100 text-green-700 border-green-300",
  closed: "bg-navy/10 text-navy/50 border-navy/20",
};

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  booked: "Booked",
  closed: "Closed",
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function waHref(phone: string | null, email: string | null) {
  const digits = (phone || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : email ? `mailto:${email}` : "#";
}

export default function AdminDashboard({
  leads,
  userEmail,
}: {
  leads: Lead[];
  userEmail: string;
}) {
  const [filter, setFilter] = useState<LeadStatus | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    for (const s of LEAD_STATUSES) c[s] = leads.filter((l) => l.status === s).length;
    return c;
  }, [leads]);

  const visible = useMemo(
    () => (filter === "all" ? leads : leads.filter((l) => l.status === filter)),
    [leads, filter]
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
      {/* Header */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy md:text-3xl">
            Booking Dashboard
          </h1>
          <p className="text-sm text-navy/50">Signed in as {userEmail}</p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy/70 transition-colors hover:bg-navy/5"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </form>
      </header>

      {/* Filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(["all", ...LEAD_STATUSES] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === s
                ? "border-navy bg-navy text-white"
                : "border-navy/15 bg-white text-navy/60 hover:bg-navy/5"
            }`}
          >
            {s === "all" ? "All" : STATUS_LABELS[s]}{" "}
            <span className="opacity-60">({counts[s] ?? 0})</span>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {visible.length === 0 ? (
        <div className="flex flex-col items-center rounded-3xl border border-navy/10 bg-white py-20 text-center">
          <Inbox className="mb-3 h-10 w-10 text-navy/20" />
          <p className="font-medium text-navy/60">No enquiries here yet</p>
          <p className="text-sm text-navy/40">
            New messages from your website will appear automatically.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {visible.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  const [isPending, startTransition] = useTransition();
  const [notes, setNotes] = useState(lead.notes ?? "");
  const [savedNote, setSavedNote] = useState(false);

  function onStatus(status: LeadStatus) {
    startTransition(async () => {
      await updateLeadStatus(lead.id, status);
    });
  }

  function onSaveNotes() {
    startTransition(async () => {
      await updateLeadNotes(lead.id, notes);
      setSavedNote(true);
      setTimeout(() => setSavedNote(false), 2000);
    });
  }

  return (
    <article
      className={`rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition-opacity ${
        isPending ? "opacity-60" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-navy">{lead.name}</h2>
          <p className="text-xs text-navy/40">{fmtDate(lead.created_at)}</p>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLES[lead.status]}`}
        >
          {STATUS_LABELS[lead.status]}
        </span>
      </div>

      {/* Details */}
      <div className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        {lead.email && (
          <a
            href={`mailto:${lead.email}`}
            className="inline-flex items-center gap-2 text-navy/70 hover:text-orange"
          >
            <Mail className="h-4 w-4 shrink-0 text-navy/40" /> {lead.email}
          </a>
        )}
        {lead.phone && (
          <span className="inline-flex items-center gap-2 text-navy/70">
            <Phone className="h-4 w-4 shrink-0 text-navy/40" /> {lead.phone}
          </span>
        )}
        {lead.service && (
          <span className="inline-flex items-center gap-2 text-navy/70">
            <Users className="h-4 w-4 shrink-0 text-navy/40" /> {lead.service}
          </span>
        )}
        {lead.travel_dates && (
          <span className="inline-flex items-center gap-2 text-navy/70">
            <Calendar className="h-4 w-4 shrink-0 text-navy/40" /> {lead.travel_dates}
          </span>
        )}
        {lead.children && (
          <span className="inline-flex items-center gap-2 text-navy/70">
            <Users className="h-4 w-4 shrink-0 text-navy/40" /> {lead.children}
          </span>
        )}
      </div>

      {lead.message && (
        <p className="mt-4 rounded-2xl bg-cream/60 p-4 text-sm text-navy/80">
          {lead.message}
        </p>
      )}

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-navy/5 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-navy/40">Status</span>
          <select
            value={lead.status}
            onChange={(e) => onStatus(e.target.value as LeadStatus)}
            disabled={isPending}
            className="rounded-lg border border-navy/15 bg-white px-3 py-1.5 text-sm text-navy focus:border-orange focus:outline-none"
          >
            {LEAD_STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>

        {(lead.phone || lead.email) && (
          <a
            href={waHref(lead.phone, lead.email)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-orange px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-dark"
          >
            <MessageCircle className="h-4 w-4" /> Reply
          </a>
        )}
      </div>

      {/* Notes */}
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-medium text-navy/40">
          Private notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="Add a note for yourself…"
          className="w-full resize-none rounded-xl border border-navy/15 bg-cream/40 px-3 py-2 text-sm text-navy placeholder:text-navy/30 focus:border-orange focus:outline-none"
        />
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={onSaveNotes}
            disabled={isPending || notes === (lead.notes ?? "")}
            className="rounded-lg border border-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-navy/70 transition-colors hover:bg-navy/5 disabled:opacity-50"
          >
            Save note
          </button>
          {savedNote && <span className="text-xs text-green-600">Saved ✓</span>}
        </div>
      </div>
    </article>
  );
}
