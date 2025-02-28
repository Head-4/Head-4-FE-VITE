import {useAuth} from "../hooks/auth/useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoute() {
    const {userIsAuthenticated} = useAuth();

    if (!userIsAuthenticated.success) {
        return <Navigate to="/" replace={true}/>
    }

    return <Outlet/>;
}
