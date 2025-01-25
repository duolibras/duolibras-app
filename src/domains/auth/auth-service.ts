import { apiClient } from "@/shared/api/axios";
import { AuthApi } from "./api/auth-api"
import { CreateUserDTO, SignInDTO } from "./api/models/auth-dto"

export class AuthService {
  private authApi: AuthApi;

  constructor() {
    this.authApi = new AuthApi();
  }

  async getProfile() {
    const response = await this.authApi.me();
    if (response.error) {
      throw response.error;
    }
    return response.data;
  }

  async studentSignUp(data: CreateUserDTO) {
    const response = await this.authApi.studentSignUp(data)
  
    if (response.error) {
      return { error: response.error }
    }

    return { success: true }
  }

  async teacherSignUp(data: CreateUserDTO) {
    const response = await this.authApi.teacherSignUp(data)
  
    if (response.error) {
      return { error: response.error }
    }

    return { success: true }
  }

  async signIn(data: SignInDTO) {
    const response = await this.authApi.signIn(data)
    console.log(response.data?.accessToken)
    if (response.error) {
      return { error: response.error }
    }
    console.log(response.data?.accessToken);
    if (response.data?.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      apiClient.setAccessToken(response.data.accessToken);
      return { success: true };
    }

    return { error: { message: 'Token não encontrado', status: 500 } }
  }

  signOut() {
    localStorage.removeItem('accessToken')
    apiClient.setAccessToken(null);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken')
  }
}
