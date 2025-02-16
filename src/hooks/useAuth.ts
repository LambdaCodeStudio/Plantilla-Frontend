import { useState, useEffect } from 'react';
import api from '../services/api';

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true
  });

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      setAuth({ user: data.user, isAuthenticated: true, loading: false });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ user: null, isAuthenticated: false, loading: false });
  };

  return { ...auth, login, logout };
};