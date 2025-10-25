export interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}