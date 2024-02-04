"use client";

import { EmptyBoards, EmptyFavourites, EmptySearch } from "./empty";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {

    const data = []; // TODO: Change to API call

    if (!data.length && query.search) {
        return (
            <EmptySearch />
        );
    };

    if (!data.length && query.favourites) {
        return (
            <EmptyFavourites />
        );
    };

    if (!data.length) {
        return (
            <EmptyBoards />
        );
    };

  return(
    <div>
        {JSON.stringify(query)}
    </div>
  )
};