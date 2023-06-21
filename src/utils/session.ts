import { IinitialStateAuth } from '../store/slices/auth/authSlice';

export const USER_COOKIE = 'yellow-cartee';

export function getAuthData() {
    if (typeof window === 'undefined') return {
      isAuthenticated: false,
      user: {},
      token: null,
      loading: false,
      isError: false,
      error: '',
    };
  const AuthData: string | undefined | null = localStorage.getItem(USER_COOKIE);

  if (typeof AuthData === 'string') {
    const persustedData: IinitialStateAuth = JSON.parse(AuthData);
    return persustedData;
  } else
    return {
      isAuthenticated: false,
      user: {},
      token: null,
      loading: false,
      isError: false,
      error: '',
    };
}
interface localstorageAuth {}
export function setAuthData(auth: IinitialStateAuth) {
  const strState = JSON.stringify(auth);
  localStorage.setItem(USER_COOKIE, strState);
}
