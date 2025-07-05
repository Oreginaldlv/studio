import { Gem } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Gem className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold">Empire Hub</span>
    </div>
  );
}
