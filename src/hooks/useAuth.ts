import { useState, useEffect, useCallback } from "react";
import {
  login,
  register,
  logout,
  refresh,
  verifyOtp,
  resendOtp,
} from "../api/auth";
import type { RegisterBody, AuthState } from "../types/auth";

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    accessToken: null,
  });
  const [loading, setLoading] = useState(true);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const res = await login(email, password);
    setAuth({ user: res.user, accessToken: res.accessToken });
  }, []);

  const handleVerifyOtp = useCallback(async (email: string, otp: string) => {
    const res = await verifyOtp(email, otp);
    setAuth({ user: res.user, accessToken: res.accessToken });
  }, []);

  const handleResendOtp = useCallback(async (email: string) => {
    await resendOtp(email);
  }, []);

  const handleRegister = useCallback(async (data: RegisterBody) => {
    const res = await register(data);
    setAuth({ user: res.user, accessToken: res.accessToken });
  }, []);

  const handleLogout = useCallback(async () => {
    await logout();
    setAuth({ user: null, accessToken: null });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await refresh();
        setAuth({ user: res.user, accessToken: res.accessToken });
      } catch {
        setAuth({ user: null, accessToken: null });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    ...auth,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    verifyOtp: handleVerifyOtp,
    resendOtp: handleResendOtp,
  };
}
