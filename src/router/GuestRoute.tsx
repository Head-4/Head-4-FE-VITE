import {useAuth} from "../hooks/auth/useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";
import {LoadingPage} from "../pages/utilPages/LoadingPage.tsx";

export default function GuestRoute() {
    const {userIsAuthenticated,isLoading} = useAuth();

    if (isLoading) {
        return <LoadingPage />;
    }

    if (userIsAuthenticated.success) {
        return <Navigate to="/main" replace={true}/>
    }

    return <Outlet/>;
}