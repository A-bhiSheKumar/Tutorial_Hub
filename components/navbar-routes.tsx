"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();
  

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto ">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
        <Button>
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button>Teacher Mode</Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
