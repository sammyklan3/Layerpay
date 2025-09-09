import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();
  const { loading, register } = useAuthContext();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    merchantName: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await register(form); // assuming res contains email
      navigate("/verify-email", { state: { email: form.email } });
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create your account</h2>

        {error && <div className="register-error">{error}</div>}

        <div className="register-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Doe"
          />
        </div>

        <div className="register-group">
          <label htmlFor="merchantName">Merchant Name</label>
          <input
            id="merchantName"
            name="merchantName"
            type="text"
            value={form.merchantName}
            onChange={handleChange}
            required
            placeholder="My Online Shop"
          />
        </div>

        <div className="register-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="register-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="register-btn"
          disabled={
            loading ||
            !form.email ||
            !form.password ||
            !form.name ||
            !form.merchantName
          }
        >
          Register
        </button>

        <p className="register-switch">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </form>
    </div>
  );
}
