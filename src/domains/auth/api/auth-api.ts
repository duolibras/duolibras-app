import { ApiClient } from '@/shared/api'
import { ProfileDTO, SignInResponse } from '../@types'
import { CreateUserDTO, SignInDTO } from './models/auth-dto'
import { httpClient } from '@/shared/api/axios';

export class AuthApi extends ApiClient {
  constructor() {
    super(httpClient, process.env.NEXT_PUBLIC_API_URL); 
  }

  async me() {
    return this.get<ProfileDTO>('/auth/me')
  }
  
  async signIn(data: SignInDTO) {
    return this.post<SignInResponse>('/auth/sign-in', data)
  }

  async teacherSignUp(data: CreateUserDTO) {
    return this.post<void>('/auth/sign-up/teacher', data)
  }

  async studentSignUp(data: CreateUserDTO) {
    return this.post<void>('/auth/sign-up/student', data)
  }
}
