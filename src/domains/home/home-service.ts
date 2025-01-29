import { AuthApi } from "../auth/api/auth-api"
import { CreateUserDTO, SignInDTO } from "../auth/api/models/auth-dto"

export class AuthService {
  constructor(private authApi: AuthApi) {}

  async signUp(data: CreateUserDTO) {
    const response = await this.authApi.signUp(data)
    
    if (response.error) {
      return { error: response.error }
    }

    return { success: true }
  }

  async signIn(data: SignInDTO) {
    const response = await this.authApi.signIn(data)
    
    if (response.error) {
      return { error: response.error }
    }

    if (response.data?.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken)
      return { success: true }
    }

    return { error: { message: 'Token não encontrado', status: 500 } }
  }

  signOut() {
    localStorage.removeItem('accessToken')
  }

  getAccessToken() {
    return localStorage.getItem('accessToken')
  }
}
