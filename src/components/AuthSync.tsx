"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/stores/authStore";

export default function AuthSync() {
  const { data: session, status } = useSession();
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  useEffect(() => {
    if (session?.user && status === "authenticated") {
      setUser({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      });
    } else {
      clearUser();
    }
  }, [session]);

  return null;
}
