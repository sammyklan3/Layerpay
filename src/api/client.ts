const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/v1";

export const API = {
  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  async post<T>(path: string, body: any): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      let message = "Request failed";
      try {
        const data = await res.json();
        message = data.error || data.message || JSON.stringify(data);
      } catch {
        message = await res.text();
      }
      throw new Error(message);
    }

    return res.json();
  },
};
