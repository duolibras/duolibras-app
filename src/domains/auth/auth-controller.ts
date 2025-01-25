import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { CreateUserDTO, SignInDTO } from './api/models/auth-dto'
import { AuthService } from './auth-service'
import { delay } from '@/shared/utils/delay';
import { ProfileDTO } from './@types';

interface AuthResponse {
  success?: boolean;
  error?: {
    message: string;
    status: number;
  };
 } 

export const createAuthController = (authService: AuthService) => {
  const useProfile = (options?: Omit<UseQueryOptions<ProfileDTO, Error>, 'queryKey' | 'queryFn'>) => {
    return useQuery({
      queryKey: ['profile'],
      queryFn: async () => {
        const response = await authService.getProfile();
        if (!response) throw new Error('Profile not found');
        return response;
      },
      staleTime: 1000 * 60 * 5,
      ...options,
    });
  };
  
  const useSignIn = (options?: UseMutationOptions<AuthResponse, Error, SignInDTO>) => {
    return useMutation({
      mutationFn: async (data: SignInDTO)  => {
        await delay(3000);
        const response = await authService.signIn(data);
        if (response.error) {
          throw response.error;
        }
        return response;
      },
      ...options,
    })
  }

  const useStudentSignUp = () => {
    return useMutation({
      mutationFn: (data: CreateUserDTO) => authService.studentSignUp(data)
    })
  }

  const useTeacherSignUp = () => {
    return useMutation({
      mutationFn: (data: CreateUserDTO) => authService.teacherSignUp(data)
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
    useProfile,
    useSignIn,
    useStudentSignUp,
    useTeacherSignUp,
    useSignOut,
    getAccessToken
  }
}
