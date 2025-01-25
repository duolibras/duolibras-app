"use client"

import { createContext, useContext } from 'react'
import { createAuthController } from '@/domains/auth/auth-controller'
import { AuthService } from '@/domains/auth/auth-service'

interface AuthContextData {
  useProfile: ReturnType<typeof createAuthController>['useProfile']
  useSignIn: ReturnType<typeof createAuthController>['useSignIn']
  useStudentSignUp: ReturnType<typeof createAuthController>['useStudentSignUp']
  useTeacherSignUp: ReturnType<typeof createAuthController>['useTeacherSignUp']
  useSignOut: ReturnType<typeof createAuthController>['useSignOut']
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authService = new AuthService()
  const controller = createAuthController(authService)

  return (
    <AuthContext.Provider value={controller}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
