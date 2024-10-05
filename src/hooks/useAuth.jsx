import { createContext, useContext } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fatcher';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { data } = useSWR('/api/auth/user', fetcher);

  const user = data?.message !== 'Unauthorized' ? data : null;
  const isLogin = !!user;

  return <AuthContext.Provider value={{ user, isLogin }}>{children}</AuthContext.Provider>;
};
