import { API } from "./client";
import type { RegisterBody, AuthResponse } from "../types/auth";

export async function register(data: RegisterBody): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/auth/register", data);
  return res;
}

export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/auth/login", { email, password });
  return res;
}

export async function refresh(): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/auth/refresh", {});
  return res;
}

export async function logout(): Promise<void> {
  await API.post("/auth/logout", {});
}

export async function verifyOtp(
  email: string,
  otp: string
): Promise<AuthResponse> {
  const res = await API.post<AuthResponse>("/auth/verify-email", {
    email,
    otp,
  });
  return res;
}

export async function resendOtp(email: string): Promise<void> {
  await API.post("/auth/resend-otp", { email });
}
