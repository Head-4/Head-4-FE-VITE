import {useMutation, useQueryClient} from "@tanstack/react-query";
import patchUserFcmToken from "../../../apis/fcm/patchUserFcmToken";
import {queryKeys} from "../../../tanstack-query/constants.ts";

export function usePatchUserFcmToken() {
    const queryClient = useQueryClient();

    const {mutateAsync} = useMutation({
        mutationFn: (userFcmToken: string) => patchUserFcmToken(userFcmToken),
        onSuccess: (data) => {
            console.log('success: ', data);
            queryClient.invalidateQueries({queryKey: [queryKeys.userFcmToken]});
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutateAsync;
}