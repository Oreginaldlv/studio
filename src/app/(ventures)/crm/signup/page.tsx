
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users } from 'lucide-react';
import { CrmSignupForm } from '../crm-signup-form';
import { Dialog } from '@/components/ui/dialog';

export default function CrmSignupPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setOpen(false);
      // Allow time for the dialog to close before navigating
      setTimeout(() => {
        router.push('/crm');
      }, 200);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Users className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Get Started with LeadLoop CRM
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Organize your contacts and streamline your outreach.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <CrmSignupForm />
        </Dialog>
      </div>
    </div>
  );
}
