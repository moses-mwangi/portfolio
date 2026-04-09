import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function formatDateRange(start: string, end?: string, current?: boolean): string {
  const startDate = formatDate(start);
  if (current) {
    return `${startDate} - Present`;
  }
  const endDate = end ? formatDate(end) : "Present";
  return `${startDate} - ${endDate}`;
}
