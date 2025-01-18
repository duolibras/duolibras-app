"use client"

import { createContext, useContext } from 'react'
import { AuthApi } from '../api/auth-api'
import { axiosClient } from '@/shared/api/axios'
import { createAuthController } from '@/domains/auth/auth-controller'
import { AuthService } from '@/domains/auth/auth-service'

interface AuthContextData {
  useSignIn: ReturnType<typeof createAuthController>['useSignIn']
  useSignUp: ReturnType<typeof createAuthController>['useSignUp']
  useSignOut: ReturnType<typeof createAuthController>['useSignOut']
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authApi = new AuthApi(axiosClient)
  const authService = new AuthService(authApi)
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
