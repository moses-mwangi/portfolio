"use client";

import { useState } from "react";
// import { ResumeBuilder } from "@/components/ResumeBuilderSimple";
import { ResumePreview } from "@/components/ResumePreviewSimple";
import { ResumeBuilder } from "@/components/ResumeBuilder";
// import { ResumePreview } from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Eye, Edit3, Sparkles } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("edit");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold gradient-text">
              Resume Builder Pro
            </h1>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a stunning, professional resume that stands out from the
            crowd. Our unique builder combines modern design with powerful
            features.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="edit" className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Edit Resume
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Preview & Export
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="space-y-6">
            <ResumeBuilder />
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <ResumePreview />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
