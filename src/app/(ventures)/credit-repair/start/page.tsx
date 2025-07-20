'use client';
import { CreditCard } from 'lucide-react';
import CreditIntakeForm from './make-form';

export default function CreditRepairStartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Let’s Get Started
      </h1>
      <p className="text-muted-foreground text-center mb-6">
        Fill out the form below to begin your credit repair journey.
      </p>
      <CreditIntakeForm />
    </div>
  );
}
