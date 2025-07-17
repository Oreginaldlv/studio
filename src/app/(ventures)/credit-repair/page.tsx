
'use client';

import { useState } from 'react';
import { CreditCard, Upload, History, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import { CreditRepairSignupForm } from './credit-repair-signup-form';

export default function CreditRepairPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage:
          "url('https://placehold.co/1920x1080.png')",
      }}
      data-ai-hint="urban tech luxury"
    >
      <CreditRepairSignupForm open={isFormOpen} onOpenChange={setIsFormOpen} />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="https://storage.googleapis.com/firebase-studio-users/user-lQ3FpucD3f1iGDsWbZq3/images/clvj083ah0001m80p6w8a2g5g.png"
            alt="Oreginald Credit Partners Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Oreginald Credit
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A fully modern SaaS credit repair platform offering both DIY and DFY
            (Done For You) services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <FeatureCard
            icon={<Upload className="h-8 w-8 text-primary" />}
            title="Upload Center"
            description="Easily upload your credit reports to get started."
          />
          <FeatureCard
            icon={<History className="h-8 w-8 text-primary" />}
            title="Letter History"
            description="Track the status of your dispute letters and monitor progress."
          />
          <FeatureCard
            icon={<DollarSign className="h-8 w-8 text-primary" />}
            title="Pricing Plans"
            description="Choose a plan that fits your needs, from DIY to full-service."
          />
          <FeatureCard
            icon={<CreditCard className="h-8 w-8 text-primary" />}
            title="Dispute Generation"
            description="GPT-powered Metro2 dispute letter generation."
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => setIsFormOpen(true)}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
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
