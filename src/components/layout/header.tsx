import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/credit-repair"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Credit
          </Link>
          <Link
            href="/vboy-empire"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            VBoy
          </Link>
          <Link
            href="/crm"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            CRM
          </Link>
          <Link
            href="/video-generator"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Video
          </Link>
           <Link
            href="/business-builder"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Business
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
