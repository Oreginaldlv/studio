
'use client';

import { useState } from 'react';
import { Users, Mail, Table } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CrmSignupForm } from './crm-signup-form';


export default function CrmPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/firebase-studio-users/user-lQ3FpucD3f1iGDsWbZq3/images/clw8s0j51000cm80q9m8t8g0z.png')",
      }}
      data-ai-hint="circuit pattern"
    >
      <CrmSignupForm open={isFormOpen} onOpenChange={setIsFormOpen} />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Users className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            LeadLoop CRM
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            An intelligent SaaS CRM for businesses and sales professionals to organize contacts and manage outreach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon={<Mail className="h-8 w-8 text-primary" />}
            title="Connect Email"
            description="Connect to your email services (IMAP, Gmail) via robust OAuth 2.0 flows."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="AI Lead Parsing"
            description="Uses GPT to parse email content into structured leads automatically."
          />
          <FeatureCard
            icon={<Table className="h-8 w-8 text-primary" />}
            title="Lead Table"
            description="View and manage all your parsed contacts and interactions in one place."
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => setIsFormOpen(true)}>
            Start Organizing
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
