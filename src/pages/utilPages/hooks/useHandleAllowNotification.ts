import {useMutation} from "@tanstack/react-query";
import {handleAllowNotification} from "../../../utils/firebaseConfig.ts";

export function useHandleAllowNotification() {
    const {mutateAsync} = useMutation({
        mutationFn: handleAllowNotification,
        onSuccess: (data) => {
            console.log('success: ', data);
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutateAsync;
}