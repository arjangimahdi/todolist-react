import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    userId: number;
}

const usePosts = () => {
    return useInfiniteQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: ({ pageParam = 1 }) =>
            axios
                .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _start: (pageParam - 1) * 10,
                        _limit: 10,
                    },
                })
                .then((res) => res.data),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
};

export default usePosts;
