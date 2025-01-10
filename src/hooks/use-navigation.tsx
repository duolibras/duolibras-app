'use client';

import { useRouter } from 'next/navigation';

export function useNavigation() {
  const router = useRouter();

  return {
    toHome: () => router.push('/'),
    toLogin: () => router.push('/login'),
    toRegister: () => router.push('/register'),
    toDashboard: () => router.push('/dashboard'),
    goBack: () => router.back(),
  };
}
