import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function UserDropdown() {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                menuRef.current &&
                e.target instanceof Node &&
                !menuRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function goTo(path: string) {
        setOpen(false);
        navigate(path);
    }

    function handleLogout() {
        logout();
        setOpen(false);
        navigate("/");
    }

    return (
        <div className="user-dropdown" ref={menuRef}>
            <button
                type="button"
                className="user-dropdown-button"
                onClick={() => setOpen(!open)}
            >
                {user?.name}
            </button>
            {open && (
                <ul className="user-dropdown-menu">
                    <li>
                        <button type="button" onClick={() => goTo("/dashboard")}>
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => goTo("/profile")}>
                            Profile
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default UserDropdown;