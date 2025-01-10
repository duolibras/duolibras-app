'use client';

import { useNavigation } from '@/hooks/use-navigation';

export const HeroButton = () => {
  const navigation = useNavigation();

  return (
    <button onClick={navigation.toRegister} className="bg-gradient-to-r from-cyan-500 to-cyan-700 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
       Matricule-se agora →
     </button>
  );
};
