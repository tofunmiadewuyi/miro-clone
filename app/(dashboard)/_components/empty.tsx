import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptySearch = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/empty-search.svg"
            alt="empty search"
            height={140}
            width={140}
            />
            <h2 className="text-2xl font-semibold mt-6">No results found.</h2>
            <p className="text-mutes-foreground text-sm mt-2">Try searching for something else.</p>
        </div>
    )
}

export const EmptyFavourites = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/empty-fav.svg"
            alt="empty search"
            height={140}
            width={140}
            />
            <h2 className="text-2xl font-semibold mt-6">No favourite boards.</h2>
            <p className="text-mutes-foreground text-sm mt-2">Try favouriting a board.</p>
        </div>
    )
}

export const EmptyBoards = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/empty-boards.svg"
            alt="empty search"
            height={110}
            width={110}
            />
            <h2 className="text-2xl font-semibold mt-6">Create your first board.</h2>
            <p className="text-mutes-foreground text-sm mt-2">Start by creating a board for your organization.</p>
            <div className="mt-6">
            <Button size="lg">
                Create a board
            </Button>
            </div>
        </div>
    )
}