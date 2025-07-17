
'use client';

import { useState } from 'react';
import { Film, BrainCircuit, Mic, Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { VideoGeneratorSignupForm } from './video-generator-signup-form';

export default function VideoGeneratorPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
      data-ai-hint="circuit pattern"
    >
      <VideoGeneratorSignupForm open={isFormOpen} onOpenChange={setIsFormOpen} />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Film className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            NMotion AI Video Generator
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A creative platform for generating AI-powered videos. Enter an idea, and we'll handle the script, voiceover, and visuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon={<BrainCircuit className="h-8 w-8 text-primary" />}
            title="AI Scriptwriting"
            description="Enter your video idea, and GPT writes a compelling script."
          />
          <FeatureCard
            icon={<Mic className="h-8 w-8 text-primary" />}
            title="AI Voiceover"
            description="ElevenLabs generates a professional voiceover for your script."
          />
          <FeatureCard
            icon={<Clapperboard className="h-8 w-8 text-primary" />}
            title="AI Visuals"
            description="Pika Labs creates stunning visuals to bring your video to life."
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => setIsFormOpen(true)}>
            Create Your Video
          </Button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center bg-background/80">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
