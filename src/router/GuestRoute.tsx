import {useAuth} from "../hooks/auth/useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";

export default function GuestRoute() {
    const {userIsAuthenticated} = useAuth();

    if (userIsAuthenticated.success) {
        return <Navigate to="/main" replace={true}/>
    }

    return <Outlet/>;
}