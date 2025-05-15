'use client';

import type { FC, ReactNode } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarRail,
} from "@/components/ui/sidebar";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated && pathname !== '/login') {
        router.push('/login');
      }
      // Optional: Redirect if authenticated and on login page (though login page should handle this too)
      // else if (isAuthenticated && pathname === '/login') {
      //   router.push('/');
      // }
    }
  }, [isAuthenticated, isLoading, router, pathname]);

  if (isLoading || (!isAuthenticated && pathname !== '/login')) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // This case should ideally be handled by the login page redirecting itself if authenticated.
  // if (isAuthenticated && pathname === '/login') {
  //   // Render children (login page) or redirect. For now, let login page handle its own redirect.
  //   return <>{children}</>;
  // }


  return (
    <SidebarProvider defaultOpen>
      <Sidebar variant="sidebar" collapsible="icon" side="left">
        <AppSidebar />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
