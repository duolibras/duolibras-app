import { ApiClient } from '@/shared/api'
import { SignInResponse } from '../@types'
import { CreateUserDTO, SignInDTO } from './models/auth-dto'

export class AuthApi extends ApiClient {
  async signIn(data: SignInDTO) {
    return this.post<SignInResponse>('/auth/signin', data)
  }

  async signUp(data: CreateUserDTO) {
    return this.post<void>('/auth/signup', data)
  }
}
