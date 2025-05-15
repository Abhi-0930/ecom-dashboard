'use client';

import type { FC } from "react";
import { Compass, Home, LineChart, Package, ShoppingCart, Users, Brain } from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar: FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path; 

  const menuItems = [
    { href: "/", icon: Home, label: "Dashboard", tooltip: "Dashboard" },
    { href: "/sales", icon: LineChart, label: "Sales Analytics", tooltip: "Sales Analytics" },
    { href: "/inventory", icon: Package, label: "Inventory", tooltip: "Inventory" },
    { href: "/customers", icon: Users, label: "Customers", tooltip: "Customers" },
    { href: "/trends", icon: Brain, label: "AI Trends", tooltip: "AI Trend Forecaster" },
  ];

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 p-2">
          <Compass className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            Commerce <span className="font-normal text-sidebar-foreground">Compass</span>
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.href)}
                tooltip={{ children: item.tooltip, side: "right", className: "bg-primary text-primary-foreground" }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Commerce Compass</p>
      </SidebarFooter>
    </>
  );
};

export default AppSidebar;
