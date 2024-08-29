"use client";

import { useTheme } from "next-themes";


export default function Home() {

  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
        
    </main>
  );
}
