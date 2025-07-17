import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
           <div className="mx-auto mb-4">
             <Logo />
           </div>
          <CardTitle className="font-headline">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your venture-specific dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Sign In</Button>
           <p className="text-xs text-muted-foreground">
            <Link href="#" className="underline hover:text-primary">Forgot password?</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
