'use client';

import type { FC } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const AppHeader: FC = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const handleNotificationsClick = () => {
    toast({
      title: "Notifications",
      description: "Notifications feature coming soon!",
    });
  };

  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Settings feature coming soon!",
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card px-4 sm:px-6 shadow-sm">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-card-foreground">Commerce Compass</h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" aria-label="Notifications" onClick={handleNotificationsClick}>
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings" onClick={handleSettingsClick}>
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" aria-label="Logout" onClick={handleLogout}>
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
