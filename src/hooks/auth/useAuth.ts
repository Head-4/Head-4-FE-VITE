import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../../tanstack-query/constants.ts";
import getValidate from "../../apis/login/getValidate.ts";

export function useAuth() {
    const fallback: boolean = false;

    const {data: userIsAuthenticated = fallback, isLoading} = useQuery({
        queryKey: [queryKeys.userAuth],
        queryFn: getValidate,
        staleTime: Infinity,
    });

    return {
        userIsAuthenticated,
        isLoading,
    };
}