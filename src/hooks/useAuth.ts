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

  useEffect(() => {
    const checkAuth = async () => {
      if (typeof document === 'undefined') return;
      
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      if (token) {
        try {
          const { data } = await api.get('/auth/me');
          setAuth({
            user: data,
            isAuthenticated: true,
            loading: false
          });
        } catch (error) {
          document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
          setAuth({
            user: null,
            isAuthenticated: false,
            loading: false
          });
        }
      } else {
        setAuth({
          user: null,
          isAuthenticated: false,
          loading: false
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      document.cookie = `token=${data.token}; path=/; max-age=86400; secure; samesite=strict`;
      setAuth({
        user: data.user,
        isAuthenticated: true,
        loading: false
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    setAuth({
      user: null,
      isAuthenticated: false,
      loading: false
    });
    window.location.href = '/login';
  };

  const register = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/auth/register', { email, password });
      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    loading: auth.loading,
    login,
    logout,
    register
  };
};