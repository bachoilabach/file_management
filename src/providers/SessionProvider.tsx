"use client";

import { SessionProvider } from "next-auth/react";
import { Session as NextAuthSession } from "next-auth";

interface Session extends NextAuthSession {
  expires: string;
}
import { ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
  session: Session | null;
  refetchInterval?: number;
}

export default function SessionProviderWrapper(props: SessionProviderProps) {
  const { session, refetchInterval, children } = props;
  return (
    <SessionProvider session={session} refetchInterval={refetchInterval}>
      {children}
    </SessionProvider>
  );
}
