export type LeadStatus = "new" | "contacted" | "booked" | "closed";

export type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string | null;
  phone: string | null;
  service: string | null;
  travel_dates: string | null;
  children: string | null;
  message: string | null;
  status: LeadStatus;
  notes: string | null;
  source: string | null;
};

export const LEAD_STATUSES: LeadStatus[] = ["new", "contacted", "booked", "closed"];
