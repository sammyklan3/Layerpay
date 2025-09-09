import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import "../styles/register.css"; // reuse the same theme

type LocationState = {
  email: string;
};

export default function VerifyEmail() {
  const { verifyOtp, resendOtp, loading } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const email = state?.email || "";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await verifyOtp(email, otp);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      await resendOtp(email);
      setMessage("A new OTP has been sent to your email.");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Email Verification</h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontSize: "0.9rem",
            color: "#374151",
          }}
        >
          Enter the 6-digit code sent to <strong>{email}</strong>
        </p>

        {error && <div className="register-error">{error}</div>}
        {message && <div className="register-message">{message}</div>}

        <div className="register-group">
          <label htmlFor="otp">Verification Code</label>
          <input
            id="otp"
            name="otp"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder="123456"
          />
        </div>

        <button type="submit" className="register-btn" disabled={loading}>
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <p className="register-switch">
          Didn’t get the code? <button onClick={handleResend}>Resend</button>
        </p>
      </form>
    </div>
  );
}
