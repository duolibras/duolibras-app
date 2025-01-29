"use client"
import { Role } from '@/domains/auth/@types';
import { DashboardHeader } from './components/area-aluno-header';
import { UnitList } from './components/unit-list';
import { AuthService } from '@/domains/auth/auth-service';
import { JourneyService } from '@/domains/journey/journey-service';
import { ProtectedRoute } from '@/shared/protected-route';
import { useQuery } from '@tanstack/react-query';

export default function DashboardPage() {
  const { data: profile, isLoading: isProfileLoading, error: profileError } = useQuery({
    queryKey: ['profile'],
    queryFn: () => new AuthService().getProfile(), 
  });

  const { data: journey, isLoading: isJourneyLoading, error: journeyError } = useQuery({
    queryKey: ['journey'],
    queryFn: () => new JourneyService().getJourney(), 
  });

  if (isProfileLoading || isJourneyLoading) {
    return <div>Carregando...</div>;
  }

  if (profileError || journeyError) {
    return <div>Erro ao carregar os dados.</div>;
  }

  if (!profile || !journey) {
    return <div>Erro ao carregar os dados.</div>;
  }

  return (
    <ProtectedRoute allowedRoles={[Role.STUDENT]}>
      <main className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <div className="relative">
          {/* <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" aria-hidden="true" /> */}
          <DashboardHeader account={profile?.account} />
          <div className="relative container mx-auto px-4 py-8">
            <UnitList units={journey.journey.units} />
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
