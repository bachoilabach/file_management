'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAuthStore } from '@/stores/authStore';

export default function AuthSync() {
  const { data: session, status } = useSession();
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);
  console.log(session?.expires,status)

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUser({
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || '',
        accessToken: session.accessToken || '',
      });
    } else if (status === 'unauthenticated') {
      clearUser();
    }
  }, [session, status]);

  return null;
}
