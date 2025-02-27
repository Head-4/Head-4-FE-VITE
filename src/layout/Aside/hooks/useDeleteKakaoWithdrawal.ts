import {useMutation, useQueryClient} from "@tanstack/react-query";
import deleteKakaoWithdrawal from "../../../apis/login/deleteKakaoWithdrawal.ts";

export function useDeleteKakaoWithdrawal() {
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: deleteKakaoWithdrawal,
        onSuccess: (data) => {
            console.log('카카오탈퇴 - success: ', data);
            queryClient.removeQueries();
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutate;
}