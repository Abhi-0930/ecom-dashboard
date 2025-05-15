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

const AppSidebar: FC = () => {
  // In a real app, this would come from usePathname or similar
  const isActive = (path: string) => path === "/"; 

  return (
    <>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 p-2">
          <Compass className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">
            Commerce <span className="font-normal">Compass</span>
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/")}
              tooltip={{ children: "Dashboard", side: "right", className: "bg-primary text-primary-foreground" }}
            >
              <Link href="/">
                <Home />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/sales")}
              tooltip={{ children: "Sales Analytics", side: "right", className: "bg-primary text-primary-foreground" }}
            >
              <Link href="#">
                <LineChart />
                <span>Sales Analytics</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/inventory")}
              tooltip={{ children: "Inventory", side: "right", className: "bg-primary text-primary-foreground" }}
            >
              <Link href="#">
                <Package />
                <span>Inventory</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/customers")}
              tooltip={{ children: "Customers", side: "right", className: "bg-primary text-primary-foreground" }}
            >
              <Link href="#">
                <Users />
                <span>Customers</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/trends")}
              tooltip={{ children: "AI Trend Forecaster", side: "right", className: "bg-primary text-primary-foreground" }}
            >
              <Link href="#">
                <Brain />
                <span>AI Trends</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Commerce Compass</p>
      </SidebarFooter>
    </>
  );
};

export default AppSidebar;
