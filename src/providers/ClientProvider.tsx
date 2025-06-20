"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ToastContainer, Flip } from "react-toastify";
import AuthSync from "@/components/AuthSync";

interface Props {
  children: ReactNode;
  session: any;
}

export default function ClientProviders({ children, session }: Props) {
  return (
    <SessionProvider session={session}>
      <AuthSync />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </SessionProvider>
  );
}
