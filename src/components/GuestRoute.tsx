import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

type GuestRouteProps = {
    children: ReactNode;
};

function GuestRoute({children}: GuestRouteProps) {
    const { user } = useAuth();
    return user ? <Navigate to="/dashboard" replace /> : children;
}

export default GuestRoute;