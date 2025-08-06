import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent';
  district?: string;
  state?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'admin' | 'agent') => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('satark_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: 'admin' | 'agent'): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    if ((email && password) || (email === 'demo' && password === 'demo')) {
      const mockUser: User = {
        id: role === 'admin' ? 'admin_001' : 'agent_001',
        name: role === 'admin' ? 'Dr. Priya Sharma' : 'Rajesh Kumar',
        email: email || `${role}@mospi.gov.in`,
        role,
        district: role === 'agent' ? 'Ahmadabad' : undefined,
        state: role === 'agent' ? 'Gujarat' : undefined,
      };
      
      setUser(mockUser);
      localStorage.setItem('satark_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('satark_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};