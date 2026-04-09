"use client";

import React, { Suspense } from "react";
import CaseStudyPage from "./CaseStudyPage";

export default function page() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <CaseStudyPage />
      </Suspense>
    </div>
  );
}
