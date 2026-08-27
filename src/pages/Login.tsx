import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

type Form = {
    email: string;
    password: string;
};

function Login() {
    const [form, setForm] = useState<Form>({ email: "", password: "" });
    const [error, setError] = useState<string | null>("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location.state?.from?.pathname || "/dashboard";

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const success = login(form.email, form.password);

        if (success) {
            navigate(redirectTo, { replace: true });
        } else {
            setError("Email and password are required.");
        }
    }

    return (
        <section className="login">
            <h2>Login to Your Account</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Login</button>
            </form>

            {error && <p className="error">{error}</p>}
        </section>
    );
}

export default Login;