export type RegisterBody = {
  name: string;
  email: string;
  password: string;
  merchantName: string;
};

export type AuthState = {
  user: AuthResponse["user"] | null;
  accessToken: string | null;
};

export type AuthResponse = {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    merchantName: string;
  };
};
