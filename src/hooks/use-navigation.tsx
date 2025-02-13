'use client';

import { useRouter } from 'next/navigation';

export function useNavigation() {
  const router = useRouter();

  return {
    toHome: () => router.push('/'),
    toLogin: () => router.push('/login'),
    toRegister: () => router.push('/register'),
    toDashboard: () => router.push('/dashboard'),
    toJourney: () => router.push('/journey'),
    toChapter: () => router.push('/chapter'),
    toLesson: () => router.push('/lesson'),
    toLessonComplete: () => router.push('/lesson-completed'),
    toSignature: () => router.push('/signature'),
    goBack: () => router.back(),
  };
}
