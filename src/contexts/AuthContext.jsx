import React, { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react';

const DEFAULT_ROLE = 'guest';
const STORAGE_KEY = 'kgf-role';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(DEFAULT_ROLE);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setRole(saved);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, role);
    }
  }, [role]);

  const loginAs = useCallback((nextRole) => {
    setRole(nextRole);
  }, []);

  const logout = useCallback(() => {
    setRole(DEFAULT_ROLE);
  }, []);

  const value = useMemo(
    () => ({
      role,
      isAuthenticated: role !== DEFAULT_ROLE,
      loginAs,
      logout,
      availableRoles: ['guest', 'user', 'admin', 'super-admin'],
    }),
    [role, loginAs, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

