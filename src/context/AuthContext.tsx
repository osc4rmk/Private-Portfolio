import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type User = {
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
};

type AuthProviderProps = {
    children: ReactNode;
};


const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {


    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem("portofolio_user");
        return saved ? JSON.parse(saved) as User : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("portofolio_user", JSON.stringify(user));
        } else {
            localStorage.removeItem("portofolio_user");
        }
    }, [user]);

    function login(email: string, password: string) {
        if (!email.trim() || !password.trim()) {
            return false;
        }
        setUser({ name: email.split("@")[0], email });
        return true;
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}