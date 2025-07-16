import { Users, Mail, Table } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';


export default function CrmPage() {
  return (
    <div className="container mx-auto px-4 py-12">
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
        <Button size="lg" asChild>
          <Link href="/crm/signup">Start Organizing</Link>
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center">
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
