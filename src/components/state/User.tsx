import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // Type Assertion

  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwash@example.com',
    });
  };

  const handleLogout = () => { }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
