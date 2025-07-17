
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard } from 'lucide-react';
import { CreditRepairSignupForm } from '../credit-repair-signup-form';
import { Dialog } from '@/components/ui/dialog';

export default function CreditRepairSignupPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false);
      // Allow time for the dialog to close before navigating
      setTimeout(() => {
        router.push('/credit-repair');
      }, 200);
    }
  };

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
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <CreditRepairSignupForm open={open} onOpenChange={handleOpenChange} />
        </Dialog>
      </div>
    </div>
  );
}
