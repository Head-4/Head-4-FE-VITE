import {useMutation, useQueryClient} from "@tanstack/react-query";
import deleteKakaoWithdrawal from "../../../apis/login/deleteKakaoWithdrawal.ts";
import {queryKeys} from "../../../tanstack-query/constants.ts";

export function useDeleteKakaoWithdrawal() {
    const queryClient = useQueryClient();

    const {mutateAsync} = useMutation({
        mutationFn: deleteKakaoWithdrawal,
        onSuccess: (data) => {
            console.log('카카오탈퇴 - success: ', data);
            queryClient.removeQueries();
            queryClient.refetchQueries({ queryKey: [queryKeys.userAuth] });
            localStorage.removeItem("accessToken");
            localStorage.removeItem('isFirst');
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutateAsync
}