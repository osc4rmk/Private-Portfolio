import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

type PrivateRouteProps = {
    children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
}

export default PrivateRoute;