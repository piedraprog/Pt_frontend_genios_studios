"use client";

import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}


const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return (
    <main className="mb-16 rounded-md relative bg-[#eff3f3] ">
      {children}
    </main>
  )
}

export default PrivateLayout;