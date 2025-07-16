import { BusinessPlanForm } from '@/app/(ventures)/business-builder/business-plan-form';
import { Rocket } from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';


export default function BusinessBuilderSignupPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Rocket className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Let's Build Your Business
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Fill out the details below to generate your initial business plan.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <Dialog open={true}>
          <BusinessPlanForm />
        </Dialog>
      </div>
    </div>
  );
}
