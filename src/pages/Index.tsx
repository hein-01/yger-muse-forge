import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PromptGenerator } from "@/components/PromptGenerator";

const Index = () => {
  const [activeTab, setActiveTab] = useState("life-drawing");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            AIYgner
          </h1>
          <p className="text-xl text-muted-foreground">
            AI Prompt Generator
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="life-drawing">Life Drawing</TabsTrigger>
            <TabsTrigger value="dance">Dance</TabsTrigger>
            <TabsTrigger value="workplaces">Workplaces</TabsTrigger>
            <TabsTrigger value="checkup">Checkup</TabsTrigger>
            <TabsTrigger value="discipline">Discipline</TabsTrigger>
          </TabsList>
          
          <TabsContent value="life-drawing" className="mt-6">
            <PromptGenerator category="life-drawing" />
          </TabsContent>
          <TabsContent value="dance" className="mt-6">
            <PromptGenerator category="dance" />
          </TabsContent>
          <TabsContent value="workplaces" className="mt-6">
            <PromptGenerator category="workplaces" />
          </TabsContent>
          <TabsContent value="checkup" className="mt-6">
            <PromptGenerator category="checkup" />
          </TabsContent>
          <TabsContent value="discipline" className="mt-6">
            <PromptGenerator category="discipline" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
