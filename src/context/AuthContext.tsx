'use client';

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: { email: string; pass: string }) => Promise<void>; // Pass can be string for mock
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Start with loading true
  const router = useRouter();

  useEffect(() => {
    // Check localStorage for auth token on initial load
    try {
      const storedAuth = localStorage.getItem('isAuthenticated_commerce_compass');
      if (storedAuth === 'true') {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
      // Handle environments where localStorage is not available or restricted
    }
    setIsLoading(false);
  }, []);

  const login = async (data: { email: string; pass: string }) => {
    // Mock login: In a real app, call your backend here
    // For demo, any email/password works.
    console.log("Attempting login with:", data.email); 
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      localStorage.setItem('isAuthenticated_commerce_compass', 'true');
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
    setIsAuthenticated(true);
    setIsLoading(false);
    router.push('/');
  };

  const logout = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    try {
      localStorage.removeItem('isAuthenticated_commerce_compass');
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
    setIsAuthenticated(false);
    setIsLoading(false);
    // router.push('/login') will be handled by AppHeader or redirect logic in AppLayout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
