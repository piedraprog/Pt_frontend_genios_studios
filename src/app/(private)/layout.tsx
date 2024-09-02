"use client";

import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return (
    <main className="rounded-md">
      {children}
    </main>
  )
}

export default PrivateLayout;