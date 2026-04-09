import { User } from "lucide-react";
import { PersonalInfo } from "@/lib/types";

interface SummarySectionProps {
  summary: string;
}

export function SummarySection({ summary }: SummarySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2 flex items-center gap-2">
        <User className="w-6 h-6" />
        Professional Summary
      </h2>
      <p className="text-gray-700 leading-relaxed text-justify">{summary}</p>
    </section>
  );
}
