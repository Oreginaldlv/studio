
import { Shirt } from 'lucide-react';
import { VboySignupForm } from './vboy-signup-form';

export default function VboyEmpireSignupPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Shirt className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Join the VBoy Empire
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Sign up for exclusive content, merch drops, and more.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <VboySignupForm open={true} />
      </div>
    </div>
  );
}
