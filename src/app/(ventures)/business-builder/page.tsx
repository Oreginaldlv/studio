import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BusinessBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Rocket className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Oreginald Business Builder
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Turn your brilliant idea into a viable business. Our AI will guide you
          through generating a comprehensive business plan, step-by-step. Let's
          build your empire together.
        </p>
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link href="/business-builder/signup">Start Building</Link>
        </Button>
      </div>
    </div>
  );
}
