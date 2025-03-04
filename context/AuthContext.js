import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra email hợp lệ

    return new Promise((resolve, reject) => {
      if (emailRegex.test(email) && password.length >= 1) {
        setUser({ email }); // Cập nhật user
        resolve({ email }); // Trả về user để kiểm tra
      } else {
        reject("Invalid credentials");
      }
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
0