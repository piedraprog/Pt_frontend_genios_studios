"use client"
 
import { useTheme } from "next-themes";

const AuthPage = () => {

  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Auth</h1>
        <button onClick={() => setTheme("light")}>button</button>
      </div>
    </main>
  );
};

export default AuthPage;