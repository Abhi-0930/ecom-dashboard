'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Compass, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated, isLoading: authIsLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!authIsLoading && isAuthenticated) {
      router.push('/'); // Redirect to dashboard if already authenticated
    }
  }, [isAuthenticated, authIsLoading, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      // Basic validation
      if (!email || !password) {
        toast({
          title: "Login Failed",
          description: "Please enter both email and password.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      await login({ email, pass: password });
      // Redirect is handled by login function or useEffect above
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
    } catch (error) {
      console.error("Login failed:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (authIsLoading || (!authIsLoading && isAuthenticated)) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center items-center mb-4">
            <Compass className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">Welcome Back!</CardTitle>
          <CardDescription className="text-muted-foreground">
            Log in to your Commerce Compass dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-base"
              />
            </div>
            <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting || authIsLoading}>
              {isSubmitting || authIsLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-xs text-muted-foreground pt-4">
           <p className="mt-2">This is a mock login for demonstration.</p>
           <p className="mt-4 text-center">
            Don't have an account? This demo doesn't support sign-ups. <br />
            Use any email/password to proceed.
          </p>
        </CardFooter>
      </Card>
       <p className="mt-8 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Commerce Compass. For demonstration purposes only.
      </p>
    </div>
  );
}
