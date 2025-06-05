"use client";

import { SessionProvider } from "next-auth/react";
import { Session as NextAuthSession } from "next-auth";

interface Session extends NextAuthSession {
  expires: string;
}
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  session: Session | null;
}

export default function SessionProviderWrapper({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
