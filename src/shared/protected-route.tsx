'use client'

import { useAuth } from '@/domains/auth/context/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Role } from '@/domains/auth/@types'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: Role[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const router = useRouter()
  const { useProfile } = useAuth()
  const { data: profile, isLoading } = useProfile()

  useEffect(() => {
    if (!isLoading && !profile) {
      router.push('/login')
      return
    }

    if (profile && allowedRoles && !allowedRoles.includes(profile.account.role)) {
      router.push('/unauthorized')
      return
    }
  }, [profile, isLoading, router, allowedRoles])

  if (isLoading) {
    return <div>Loading...</div> 
  }

  return <>{children}</>
}
