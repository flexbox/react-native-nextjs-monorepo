
import type { FunctionComponent } from "react";
import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  user: boolean;
  setUser: (user: boolean) => void;
}

const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
