import { useMutation } from '@tanstack/react-query'
import { CreateUserDTO, SignInDTO } from '../auth/api/models/auth-dto'
import { AuthService } from './home-service'

export const createAuthController = (authService: AuthService) => {
  const useSignIn = () => {
    return useMutation({
      mutationFn: (data: SignInDTO) => authService.signIn(data)
    })
  }

  const useSignUp = () => {
    return useMutation({
      mutationFn: (data: CreateUserDTO) => authService.signUp(data)
    })
  }

  const useSignOut = () => {
    return useMutation({
      mutationFn: () => {
        authService.signOut()
        return Promise.resolve()
      }
    })
  }

  const getAccessToken = () => authService.getAccessToken()

  return {
    useSignIn,
    useSignUp,
    useSignOut,
    getAccessToken
  }
}
