
'use client';

import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BusinessPlanForm } from './business-plan-form';
import { Dialog } from '@/components/ui/dialog';

export default function BusinessBuilderPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: "url('https://placehold.co/1920x1080.png')",
      }}
      data-ai-hint="urban tech luxury"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Rocket className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Oreginald Business Builder
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Turn your brilliant idea into a viable business. Our AI will guide
            you through generating a comprehensive business plan, step-by-step.
            Let's build your empire together.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => setIsFormOpen(true)}>
            Start Building
          </Button>
        </div>
      </div>
       <div className="mx-auto mt-12 max-w-4xl px-4">
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <BusinessPlanForm />
        </Dialog>
      </div>
    </div>
  );
}
