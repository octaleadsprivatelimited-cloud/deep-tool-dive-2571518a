import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'kgf-platform-state';

const defaultState = {
  users: [
    { id: 'usr-1', name: 'Anita Rao', role: 'admin', chapter: 'USA - West Coast', status: 'Active', email: 'anita.rao@kgf.org' },
    { id: 'usr-2', name: 'Sathvik Reddy', role: 'user', chapter: 'India - Hyderabad', status: 'Active', email: 'sathvik.reddy@kgf.org' },
    { id: 'usr-3', name: 'Hema Krishnan', role: 'admin', chapter: 'Singapore', status: 'Invited', email: 'hema.krishnan@kgf.org' },
    { id: 'usr-4', name: 'David K. Rao', role: 'user', chapter: 'Canada - Toronto', status: 'Suspended', email: 'david.rao@kgf.org' },
  ],
  alertsResolvedPercentage: 92,
  adminsCount: 28,
  membersCount: 102000,
  chaptersCount: 40,
};

const PlatformContext = createContext(null);

const readStorage = () => {
  if (typeof window === 'undefined') return defaultState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return JSON.parse(raw);
  } catch {
    return defaultState;
  }
};

const writeStorage = (state) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const PlatformProvider = ({ children }) => {
  const [platformState, setPlatformState] = useState(() => readStorage());

  useEffect(() => {
    writeStorage(platformState);
  }, [platformState]);

  const addUser = useCallback((user) => {
    setPlatformState((current) => ({
      ...current,
      users: [
        {
          id: `usr-${Date.now()}`,
          ...user,
        },
        ...current.users,
      ],
      adminsCount: user.role === 'admin' || user.role === 'super-admin' ? current.adminsCount + 1 : current.adminsCount,
      membersCount: user.role === 'user' ? current.membersCount + 1 : current.membersCount,
    }));
  }, []);

  const updateUser = useCallback((id, updates) => {
    setPlatformState((current) => {
      const nextUsers = current.users.map((user) => (user.id === id ? { ...user, ...updates } : user));
      const previousUser = current.users.find((user) => user.id === id);
      const nextUser = nextUsers.find((user) => user.id === id);

      let adminsCount = current.adminsCount;
      if (previousUser && nextUser && previousUser.role !== nextUser.role) {
        if (['admin', 'super-admin'].includes(nextUser.role) && !['admin', 'super-admin'].includes(previousUser.role)) {
          adminsCount += 1;
        } else if (!['admin', 'super-admin'].includes(nextUser.role) && ['admin', 'super-admin'].includes(previousUser.role)) {
          adminsCount = Math.max(0, adminsCount - 1);
        }
      }

      let membersCount = current.membersCount;
      if (previousUser && nextUser && previousUser.role !== nextUser.role) {
        if (nextUser.role === 'user' && previousUser.role !== 'user') {
          membersCount += 1;
        } else if (previousUser.role === 'user' && nextUser.role !== 'user') {
          membersCount = Math.max(0, membersCount - 1);
        }
      }

      return {
        ...current,
        users: nextUsers,
        adminsCount,
        membersCount,
      };
    });
  }, []);

  const removeUser = useCallback((id) => {
    setPlatformState((current) => {
      const userToRemove = current.users.find((user) => user.id === id);
      if (!userToRemove) return current;

      return {
        ...current,
        users: current.users.filter((user) => user.id !== id),
        adminsCount:
          ['admin', 'super-admin'].includes(userToRemove.role) ? Math.max(0, current.adminsCount - 1) : current.adminsCount,
        membersCount: userToRemove.role === 'user' ? Math.max(0, current.membersCount - 1) : current.membersCount,
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      state: platformState,
      users: platformState.users,
      metrics: {
        adminsCount: platformState.adminsCount,
        membersCount: platformState.membersCount,
        chaptersCount: platformState.chaptersCount,
        alertsResolvedPercentage: platformState.alertsResolvedPercentage,
      },
      addUser,
      updateUser,
      removeUser,
    }),
    [platformState, addUser, updateUser, removeUser]
  );

  return <PlatformContext.Provider value={value}>{children}</PlatformContext.Provider>;
};

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
};


