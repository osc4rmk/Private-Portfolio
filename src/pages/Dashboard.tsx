import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { user } = useAuth();

    return (
        <section className="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome back, {user?.name}!</p>
            <p>This is a private page that can only be accessed after logging in.</p>
        </section>
    );
}

export default Dashboard;