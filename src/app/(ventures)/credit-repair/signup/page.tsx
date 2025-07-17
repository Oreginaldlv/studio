
import { CreditCard } from 'lucide-react';
import { CreditRepairSignupForm } from '../credit-repair-signup-form';

export default function CreditRepairSignupPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <CreditCard className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Sign Up for Oreginald Credit
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Start your journey to better credit today.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <CreditRepairSignupForm open={true} />
      </div>
    </div>
  );
}
