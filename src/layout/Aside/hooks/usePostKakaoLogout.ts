import {useMutation, useQueryClient} from "@tanstack/react-query";
import postKakaoLogout from "../../../apis/login/postKakaoLogout.ts";

export function usePostKakaoLogout() {
    const queryClient = useQueryClient();

    const {mutateAsync} = useMutation({
        mutationFn: postKakaoLogout,
        onSuccess: (data) => {
            console.log("로그아웃 Success: ", data);
            queryClient.removeQueries();
            localStorage.removeItem("accessToken");
            localStorage.removeItem("isFirst");
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutateAsync;
}
