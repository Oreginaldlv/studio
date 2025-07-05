import { CreditCard, Upload, History, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function CreditRepairPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <CreditCard className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Credit Empire
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          A fully modern SaaS credit repair platform offering both DIY and DFY (Done For You) services.
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
        <Button size="lg">Get Started</Button>
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
