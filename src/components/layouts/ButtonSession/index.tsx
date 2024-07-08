"use client";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { getInitialsFromEmail } from "../../../../utils/GetInitialsFromEmail";
import { Button } from "@/components/ui/button";

const ButtonSession = () => {
  const { data: session } = useSession();
  const email = session?.user?.email ?? "";
  const avatarImage = session?.user?.image || "";
  const initials = getInitialsFromEmail(email);

  return (
    <>
      {session?.user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              {avatarImage ? (
                // <AvatarImage src={avatarImage} alt="@bkn-ava" />
                <AvatarImage src={avatarImage} alt="@bkn-ava" />
              ) : (
                <AvatarFallback className="bg-zinc-500 text-white rounded-full p-2">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => signOut()}
                className="cursor-pointer  text-red-500 hover:text-red-500 hover:bg-red-400/20  font-semibold"
              >
                <LogOut className="mr-4 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {session?.user == null && (
        <Link href={"/signin"}>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export default ButtonSession;
