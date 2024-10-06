import { createContext, useContext } from 'react';
import useImmerLocalStorageState from '../utils/useImmerLocalStorageState';
import useSWR from 'swr';
import fetcher from '../utils/fatcher';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [room, setRoom] = useImmerLocalStorageState('room', { defaultValue: null });
  const { data } = useSWR('/api/auth/user', fetcher);

  const user = data?.message !== 'Unauthorized' ? data : null;
  const isLogin = !!user;

  return <AuthContext.Provider value={{ user, isLogin, room, setRoom }}>{children}</AuthContext.Provider>;
};
