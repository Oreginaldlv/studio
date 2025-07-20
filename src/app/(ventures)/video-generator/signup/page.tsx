'use client';

import { Film } from 'lucide-react';
import { VideoGeneratorSignupForm } from '../video-generator-signup-form';

export default function VideoGeneratorSignupPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Film className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Create Your NMotion AI Account
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Generate your first AI video in minutes.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <VideoGeneratorSignupForm open={true} onOpenChange={() => {}} />
      </div>
    </div>
  );
}
