import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { auth, signOut } from "~/server/auth";
import { signout } from "./signout";

export default async function NavBar() {
  const session = await auth();

  console.log(session?.user);
  return (
    <nav className="container mx-auto flex justify-between p-6">
      <div className="flex justify-between gap-x-10">
        {/* Logo */}
        <div>Logo</div>
        {/* Show */}
        <div>
          <Link href="/shows">Shows</Link>
        </div>
        {/* Create */}
        <div>
          {/* Show can only be created by admin */}
          <Link href="/create">Create</Link>
        </div>
      </div>

      {/* User login */}
      {/* Avatatr */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={session?.user.image ?? ""}
                alt="user profile photo"
              ></AvatarImage>
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem onClick={signout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
