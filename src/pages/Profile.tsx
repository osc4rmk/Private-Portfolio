import { useAuth } from "../context/AuthContext";

function Profile() {
    const { user } = useAuth();

    return (
        <section className="profile">
            <h2>My Profile</h2>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </section>
    );
}

export default Profile;