/** @format */

"use client";

import type React from "react";

import Link from "next/link";
import { Bike, LayoutGrid, Settings, UserStar, Utensils } from "lucide-react";
import { GoCreditCard } from "react-icons/go";
import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import LogoutModal from "./logout-modal";
import { useState } from "react";
import { Button } from "../ui/button";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbMessageDollar } from "react-icons/tb";

// import { logout } from "@/service/authService";
export default function DashboardSidebar() {
  return <DashboardSidebarContent />;
}

function DashboardSidebarContent() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const { state } = useSidebar();

  const handleLogout = async () => {
    // Perform logout actions here (clear tokens, etc.)
    // Redirect to login page
    // await logout();
    // localStorage.removeItem("accessToken");
    router.push("/signin");
  };

  if (
    pathname === "/signIn" ||
    pathname === "/signUp" ||
    pathname === "/forget-pass" ||
    pathname === "/verify-password" ||
    pathname === "/verify-otp" ||
    pathname === "/reset-pass"
  ) {
    return null;
  }

  const isCollapsed = state === "collapsed";

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <SidebarTrigger />
      </div>
      <Sidebar
        className="border-r-0 border-transparent !bg-[#F2F6FF]"
        collapsible="icon"
      >
        <SidebarContent>
          <div
            className={`flex items-center justify-center px-2 py-6 relative ${
              isCollapsed ? "px-2" : "gap-2"
            }`}
          >
            <Link href="/">
              {isCollapsed ? (
                <Image
                  src="/food-icon-mini.png"
                  alt="logo"
                  width={isCollapsed ? 40 : 140}
                  height={isCollapsed ? 40 : 140}
                  className={"h-5 w-5"}
                />
              ) : (
                <Image
                  src="/food-icon.png"
                  alt="logo"
                  width={isCollapsed ? 40 : 140}
                  height={isCollapsed ? 40 : 140}
                  className={"h-10 w-16"}
                />
              )}
            </Link>
            {/* Collapse button for desktop */}
            <div
              className={`absolute top-1 hidden md:block ${
                isCollapsed ? "right-0" : "right-0"
              }`}
            >
              <SidebarTrigger />
            </div>
          </div>

          <SidebarMenu
            className={
              isCollapsed ? "px-2 space-y-2 items-center" : "px-6 space-y-1"
            }
          >
            <NavItem
              href="/"
              icon={LayoutGrid}
              label="Dashboard"
              active={pathname === "/"}
              collapsed={isCollapsed}
            />

            <NavItem
              href="/food-categories"
              icon={IoFastFoodOutline}
              label="Food Categories"
              active={
                pathname === "/food-categories" ||
                pathname.startsWith("/food-categories")
              }
              collapsed={isCollapsed}
            />

            {!isCollapsed && (
              <p className="text-sm text-red-500 pl-4 pt-2">User Information</p>
            )}

            <NavItem
              href="/customer"
              icon={UserStar}
              label="Customer"
              active={
                pathname === "/customer" || pathname.startsWith("/customer")
              }
              collapsed={isCollapsed}
            />

            <NavItem
              href="/restaurant"
              icon={Utensils}
              label="Restaurant"
              active={
                pathname === "/restaurant" || pathname.startsWith("/restaurant")
              }
              collapsed={isCollapsed}
            />

            <NavItem
              href="/rider"
              icon={Bike}
              label="Rider"
              active={pathname === "/rider" || pathname.startsWith("/rider")}
              collapsed={isCollapsed}
            />

            {!isCollapsed && (
              <p className="text-sm text-red-500 pl-4 pt-2">
                Payment Management
              </p>
            )}

            <NavItem
              href="/payment"
              icon={GoCreditCard}
              label="Payment"
              active={
                pathname === "/payment" || pathname.startsWith("/payment")
              }
              collapsed={isCollapsed}
            />
            <NavItem
              href="/widthdraw-request"
              icon={TbMessageDollar}
              label="Withdraw Request"
              active={
                pathname === "/withdraw-request" ||
                pathname.startsWith("/withdraw-request")
              }
              collapsed={isCollapsed}
            />

            {!isCollapsed && (
              <p className="text-sm text-red-500 pl-4 pt-2">Other Menu</p>
            )}

            <NavItem
              href="/settings"
              icon={Settings}
              label="Settings"
              active={
                pathname === "/settings" || pathname.startsWith("/settings")
              }
              collapsed={isCollapsed}
            />
          </SidebarMenu>
        </SidebarContent>

        {!isCollapsed ? (
          <SidebarFooter className="p-6">
            <Button
              onClick={() => setIsLogoutModalOpen(true)}
              className="flex justify-center w-32 items-center gap-3  px-4 py-3 bg-red-500 text-white hover:bg-red-600 rounded-lg"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.4 7.56023C9.71 3.96023 11.56 2.49023 15.61 2.49023H15.74C20.21 2.49023 22 4.28023 22 8.75023V15.2702C22 19.7402 20.21 21.5302 15.74 21.5302H15.61C11.59 21.5302 9.74 20.0802 9.41 16.5402"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 12H4.12"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.35 8.65039L3 12.0004L6.35 15.3504"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-white text-lg font-semibold">Log out</span>
            </Button>
          </SidebarFooter>
        ) : (
          <SidebarFooter className="p-6">
            <Button
              onClick={() => setIsLogoutModalOpen(true)}
              className="flex justify-center items-center gap-3  px-4 py-1 bg-transparent  text-white hover:bg-red-200 rounded-lg"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.4 7.56023C9.71 3.96023 11.56 2.49023 15.61 2.49023H15.74C20.21 2.49023 22 4.28023 22 8.75023V15.2702C22 19.7402 20.21 21.5302 15.74 21.5302H15.61C11.59 21.5302 9.74 20.0802 9.41 16.5402"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 12H4.12"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.35 8.65039L3 12.0004L6.35 15.3504"
                  stroke="#4F3E19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </SidebarFooter>
        )}
      </Sidebar>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

// ...existing code...

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            collapsed
              ? "flex items-center justify-center px-2 py-3 transition-colors rounded-full w-12 h-12 mx-auto"
              : "flex items-center gap-3 px-4 py-3 transition-colors rounded-md",
            active
              ? "bg-custom-red/30 text-custom-red hover:!bg-custom-red/30 hover:!text-custom-red font-medium"
              : "bg-transparent text-black hover:!bg-custom-red/10 hover:!text-custom-red font-medium"
          )}
        >
          <Icon size={collapsed ? 20 : 18} />
          {!collapsed && <span className="text-base">{label}</span>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
// ...existing code...
