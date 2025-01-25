"use client"

import { useRouter } from 'next/navigation'
import LoadingContent from './components/loading-content'
import { useAuth } from '@/domains/auth/context/auth-context'
import { useJourney } from '@/domains/journey/context/journey-context'
import { Role } from '@/domains/auth/@types'

export default function WaitingPage() {
  const router = useRouter()
  const { useProfile } = useAuth() 
  const { useMyJourney } = useJourney()

  const { data: profile, error: profileError } = useProfile({})
  const { error: journeyError } = useMyJourney()
  
  const handleSuccess = () => {
    if (profile?.account.role === Role.STUDENT) {
      router.push('/area-aluno')
    } else if (profile?.account.role === Role.TEACHER) {
      router.push('/area-professor')
    }
  }

  // Função para redirecionar em caso de erro
  const handleError = () => {
    router.push('/login')
  }

  return (
    <LoadingContent
      onSuccess={handleSuccess}
      onError={handleError}
      error={!!profileError || !!journeyError}
    />
  )
}
