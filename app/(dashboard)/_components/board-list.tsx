"use client";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorite?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    return(
        <div>
              {JSON.stringify(query)}
        </div>
      );
};