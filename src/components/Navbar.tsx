import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UserDropdown from "./UserDropdown";

const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
];

function Navbar() {
    const { user } = useAuth();
    const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : "");


    return (
        <nav className="navbar">
            <div className="navbar-brand">Portfolio Oscar</div>
            <ul className="navbar-menu">
                {navigation.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => (isActive ? "active" : "")}>
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    )
                }
                <li>
                    {user ? (
                        <UserDropdown />
                    ) : (
                        <NavLink to="/login" className={linkClass}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;