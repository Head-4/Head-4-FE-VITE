import {useAuth} from "../hooks/auth/useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";
import {LoadingPage} from "../pages/utilPages/LoadingPage.tsx";

export default function GuestRoute() {
    const {userIsAuthenticated, isLoading} = useAuth();
    const isFirst = localStorage.getItem('isFirst') === 'true';

    if (isLoading) {
        return <LoadingPage/>;
    }

    if (userIsAuthenticated.success) {
        if (isFirst) {
            return <Navigate to="/register/university" replace={true}/>
        }
        return <Navigate to="/main" replace={true}/>
    }

    return <Outlet/>;
}