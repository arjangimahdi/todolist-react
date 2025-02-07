import React from "react";
import usePosts from "../hooks/usePosts";

export const PostList = () => {
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts();

    if (isLoading) return <p>isLoading...</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <div className="gap-y-2 flex flex-col">
            <ul className="flex flex-col gap-y-2">
                {data.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.map((post) => {
                            return <li key={post.id}>{post.title}</li>;
                        })}
                    </React.Fragment>
                ))}
            </ul>
            <button
                type="button"
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                className="focus:outline-none  disabled:text-gray-900 disabled:bg-white disabled:border disabled:border-gray-200 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
        </div>
    );
};
