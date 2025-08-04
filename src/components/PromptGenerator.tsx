import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { EditableSelect } from "@/components/EditableSelect";
import { MultiSelect } from "@/components/MultiSelect";

interface PromptGeneratorProps {
  category: string;
}

export const PromptGenerator = ({ category }: PromptGeneratorProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    camera: "",
    environment: "",
    subject: "",
    subjectClothing: [] as string[],
    subjectPose: "",
    subject2: "",
    subject2Pose: "",
    additionalText: [] as string[]
  });

  const cameraOptions = [
    "The image shows a side-profile view of a scene",
    "The image shows a front view of a scene",
    "The image shows a three-quarter view of a scene",
    "The image shows an overhead view of a scene"
  ];

  const environmentOptions = [
    "inside a nursing home or community room",
    "in a bright art studio",
    "in a modern dance studio",
    "in a corporate office",
    "in a medical clinic"
  ];

  const subjectOptions = [
    "A tall, young Asian male model stands confidently on a small red carpeted platform, facing a seated group of elderly women",
    "A graceful dancer moves fluidly across the space",
    "A professional presenter addresses the audience",
    "A healthcare worker demonstrates procedures",
    "A tall, young athletic asian male model who is reclining casually on a wooden table at the center of the group.",
    "A tall, young athletic asian male model who is lying on a mat in a relaxed pose"
  ];

  const clothingOptions = [
    "hoodie",
    "tight jean",
    "sweatpant",
    "Adidas Superstar sneaker",
    "Adidas grand court shoe",
    "converse shoes",
    "Nike sneakers",
    "Adidas grand court black shoe",
    "black leather casual shoes",
    "nike dunk low red/yellow",
    "vans classic Old Skool shoes",
    "open jean",
    "unzipped jean",
    "white brief",
    "yellow brief"
  ];

  const poseOptions = [
    "His right arm is raised, bent at the elbow with his hand resting on or behind his head, while his left arm hangs relaxed by his side",
    "His right arm is bent upward in a classic bicep flex pose, with his fist near his head, while his left hand rests on his hip. He flexed bicep with a proud expression",
    "He is leaning back on one elbow, with his upper body slightly twisted, and his other arm resting on his bent knee.",
    "His both arms are raised above his head; his left hand grips his right elbow, pulling the right arm across the top of his head."
  ];

  const subject2Options = [
    "Indian",
    "Chinese",
    "British",
    "African",
    "Bangladesh",
    "Asian",
    "South Asian"
  ];

  const subject2PoseOptions = [
    "seated in chairs arranged in a row. Most are smiling and gazing up at the model, with expressions of curiosity and attentiveness",
    "seated in a semi-circle by facing him. Most are smiling and gazing at the model, with expressions of curiosity and attentiveness"
  ];

  const additionalTextOptions = [
    "The environment is well-lit, with large windows behind the group, neutral walls, and tiled flooring.",
    "The composition emphasizes the contrast in age and activity, creating a quietly focused and respectful artistic setting."
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePrompt = () => {
    const clothing = formData.subjectClothing.join(", ");
    const additional = formData.additionalText.join(" ");
    
    return `Generate an image: ${formData.camera} ${formData.environment} ${formData.subject} He is wearing only ${clothing}, showcasing a lean and slightly toned physique. ${formData.subjectPose} The elderly ${formData.subject2} women are ${formData.subject2Pose} ${additional}`;
  };

  const copyToClipboard = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(prompt);
    toast({
      title: "Copied to clipboard!",
      description: "The generated prompt has been copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="capitalize">{category.replace('-', ' ')} Prompt Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="camera">Camera View</Label>
              <EditableSelect
                options={cameraOptions}
                value={formData.camera}
                onChange={(value) => handleInputChange("camera", value)}
                placeholder="Select or enter camera view..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="environment">Environment</Label>
              <EditableSelect
                options={environmentOptions}
                value={formData.environment}
                onChange={(value) => handleInputChange("environment", value)}
                placeholder="Select or enter environment..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <EditableSelect
                options={subjectOptions}
                value={formData.subject}
                onChange={(value) => handleInputChange("subject", value)}
                placeholder="Select or enter subject description..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjectClothing">Subject Clothing (Multiple Selection)</Label>
              <MultiSelect
                options={clothingOptions}
                value={formData.subjectClothing}
                onChange={(value) => handleInputChange("subjectClothing", value)}
                placeholder="Select clothing items..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjectPose">Subject Pose</Label>
              <EditableSelect
                options={poseOptions}
                value={formData.subjectPose}
                onChange={(value) => handleInputChange("subjectPose", value)}
                placeholder="Select or enter pose..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject2">Subject2</Label>
              <EditableSelect
                options={subject2Options}
                value={formData.subject2}
                onChange={(value) => handleInputChange("subject2", value)}
                placeholder="Select or enter ethnicity..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject2Pose">Subject2 Pose</Label>
              <EditableSelect
                options={subject2PoseOptions}
                value={formData.subject2Pose}
                onChange={(value) => handleInputChange("subject2Pose", value)}
                placeholder="Select or enter subject2 pose..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalText">Additional Text (Multiple Selection)</Label>
              <MultiSelect
                options={additionalTextOptions}
                value={formData.additionalText}
                onChange={(value) => handleInputChange("additionalText", value)}
                placeholder="Select additional text..."
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Generated Prompt
            <Button onClick={copyToClipboard} size="sm" variant="outline">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={generatePrompt()}
            readOnly
            className="min-h-[120px] resize-none"
            placeholder="Your generated prompt will appear here..."
          />
        </CardContent>
      </Card>
    </div>
  );
};