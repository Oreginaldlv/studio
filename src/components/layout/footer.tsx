import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-8">
           <Image
            src="https://storage.googleapis.com/firebase-studio-users/user-lQ3FpucD3f1iGDsWbZq3/images/clw92715i0004m80pct3gawen.png"
            alt="Decorative divider"
            width={1920}
            height={50}
            className="w-full h-auto"
            data-ai-hint="abstract banner"
          />
          <Image
            src="https://storage.googleapis.com/firebase-studio-users/user-lQ3FpucD3f1iGDsWbZq3/images/clvgdzl7c0003m80pi2k27346.png"
            alt="Decorative footer accent"
            width={1920}
            height={200}
            className="w-full h-auto"
            data-ai-hint="abstract banner"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oreginald Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
