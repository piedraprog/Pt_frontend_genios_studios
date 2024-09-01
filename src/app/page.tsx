"use client"; // Asegura que el componente se ejecute en el cliente

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Marca el componente como montado para evitar problemas de SSR.
    setMounted(true);
  }, []);

  const tema = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Cambia entre temas
  };

  // Retorna null si no está montado para evitar desajustes de hidratación
  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <button onClick={tema}>Cambiar Tema</button>
    </main>
  );
}
