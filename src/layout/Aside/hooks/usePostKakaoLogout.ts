import {useMutation, useQueryClient} from "@tanstack/react-query";
import postKakaoLogout from "../../../apis/login/postKakaoLogout.ts";

export function usePostKakaoLogout() {
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: postKakaoLogout,
        onSuccess: (data) => {
            console.log("로그아웃 Success: ", data);
            queryClient.removeQueries();
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutate;
}