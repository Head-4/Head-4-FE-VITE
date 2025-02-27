import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../../../tanstack-query/constants.ts";
import getUserFcmToken from "../../../apis/fcm/getUserFcmToken.ts";

export function useUserFcmToken() {
    const fallback = false;

    const {data: userFcmToken = fallback} = useQuery({
        queryKey: [queryKeys.userFcmToken],
        queryFn: getUserFcmToken,
        staleTime: Infinity,
    });

    return userFcmToken;
}