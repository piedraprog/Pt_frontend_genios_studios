"use client"; // Asegura que el componente se ejecute en el cliente

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DialogComponent from "@/common/components/dialogUI";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Marca el componente como montado para evitar problemas de SSR.
    setMounted(true);
  }, []);

  const tema = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Cambia entre temas
  };

  // Retorna null si no está montado para evitar desajustes de hidratación
  if (!mounted) return null;

  const showDialogComponent = () => {
    setShowDialog(true);
  }

  return (
    <>
      <main className="h-full flex flex-col items-center justify-between p-24 bg-black">
        <h1>Home</h1>
        <button onClick={() => setShowDialog(true)}>Cambiar Tema</button>

      </main>
      <DialogComponent
        title="Suspender Filial"
        open={showDialog}
        onConfirm={showDialogComponent}
        setOpen={() => setShowDialog(false)}
        onCancel={() => setShowDialog(false)}
      >
        <p>¿Estas seguro de realizar esta accion?</p>
      </DialogComponent>
    </>
  );
}
