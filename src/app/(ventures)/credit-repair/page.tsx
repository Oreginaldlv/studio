
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';

const IconUploadCenter = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="shadow-upload" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
      </filter>
    </defs>
    <g filter="url(#shadow-upload)">
      <circle cx="48" cy="48" r="44" fill="hsl(var(--background))" />
      <path
        d="M66 58C71.5228 58 76 53.5228 76 48C76 42.4772 71.5228 38 66 38C66 32.4772 61.5228 28 56 28C50.4772 28 46 32.4772 46 38H44C35.1634 38 28 45.1634 28 54C28 62.8366 35.1634 70 44 70H66"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54 52L48 46L42 52"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 46V62"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const IconLetterHistory = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="shadow-history" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
      </filter>
    </defs>
    <g filter="url(#shadow-history)">
      <circle cx="48" cy="48" r="44" fill="hsl(var(--background))" />
      <path
        d="M40 28H62C64.2091 28 66 29.7909 66 32V68C66 70.2091 64.2091 72 62 72H34C31.7909 72 30 70.2091 30 68V50"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 28V24H58V28"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="46" r="12" stroke="#FFC300" strokeWidth="4" />
      <path
        d="M44 38V46H50"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const IconPricingPlans = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
     <defs>
      <filter id="shadow-pricing" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
      </filter>
    </defs>
    <g filter="url(#shadow-pricing)">
      <circle cx="48" cy="48" r="44" fill="hsl(var(--background))" />
      <path
        d="M48 28V68"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M38 34C38 30.6863 40.6863 28 44 28H52C56.4183 28 60 31.5817 60 36C60 40.4183 56.4183 44 52 44H44C39.5817 44 36 47.5817 36 52C36 56.4183 39.5817 60 44 60H52C55.3137 60 58 62.6863 58 66"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 40H64"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 56H64"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const IconDisputeGeneration = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
     <defs>
      <filter id="shadow-dispute" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
      </filter>
    </defs>
    <g filter="url(#shadow-dispute)">
      <circle cx="48" cy="48" r="44" fill="hsl(var(--background))" />
      <path
        d="M62 66H34C31.7908 66 30 64.2092 30 62V34C30 31.7908 31.7908 30 34 30H50L66 46V62C66 64.2092 64.2092 66 62 66Z"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M48 30C48 26.6863 45.3137 24 42 24C38.6863 24 36 26.6863 36 30"
        stroke="#FFC300"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect
        x="42"
        y="42"
        width="12"
        height="8"
        rx="2"
        stroke="#FFC300"
        strokeWidth="4"
      />
      <circle cx="48" cy="36" r="2" fill="#FFC300" />
    </g>
  </svg>
);


export default function CreditRepairPage() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage:
          "url('/images/background.png')",
      }}
      data-ai-hint="circuit pattern"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/images/Credit/logo.png"
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
            icon={<IconUploadCenter />}
            title="Upload Center"
            description="Easily upload your credit reports to get started."
          />
          <FeatureCard
            icon={<IconLetterHistory />}
            title="Letter History"
            description="Track the status of your dispute letters and monitor progress."
          />
          <FeatureCard
            icon={<IconPricingPlans />}
            title="Pricing Plans"
            description="Choose a plan that fits your needs, from DIY to full-service."
          />
          <FeatureCard
            icon={<IconDisputeGeneration />}
            title="Dispute Generation"
            description="GPT-powered Metro2 dispute letter generation."
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/credit-repair/signup">Get Started</Link>
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
        <div className="mx-auto w-fit">
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
