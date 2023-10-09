import React, { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
interface BurgerMenuProps {}

const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link prefetch={false} href="/find-jobs">
            <DropdownMenuItem>Find Job</DropdownMenuItem>
          </Link>

          <Link prefetch={false} href="/find-company">
            <DropdownMenuItem>Brows Companies</DropdownMenuItem>
          </Link>

          <Link prefetch={false} href="/myaccount">
            <DropdownMenuItem>Login</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BurgerMenu;
