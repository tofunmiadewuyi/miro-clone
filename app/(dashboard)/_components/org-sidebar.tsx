"use client"

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { OrgSwitcher } from "./org-switcher";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favourites = searchParams.get("favourites");


    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href={"/"}>
                <div className="flex items-center gap-x-2">
                    <Image 
                    src="/logo.svg"
                    alt="Logo"
                    height={40}
                    width={40}
                    />
                    <span className={cn(
                        "font-semibold text-2xl",
                        font.className
                    )}>
                        Boardy
                    </span>
                </div>
            </Link>
            <OrgSwitcher/>
            <div className="space-y-1 w-full">
                <Button
                variant={favourites ? "ghost" : "secondary"}
                asChild
                size="lg"
                className="font-normal justify-start px-2 w-full"
                >
                    <Link href="/">
                        <LayoutDashboard className="h-4 w-4 mr-2"/>
                        Team boards
                    </Link>
                </Button>
                <Button
                variant={favourites ? "secondary" : "ghost"}
                asChild
                size="lg"
                className="font-normal justify-start px-2 w-full"
                >
                    <Link href={{
                        pathname: "/",
                        query: { favourites: true }
                    }}>
                        <Star className="h-4 w-4 mr-2"/>
                        Favourite boards
                    </Link>
                </Button>
            </div>
        </div>
    );
};
