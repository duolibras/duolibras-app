/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpClient = {
  get: <T>(url: string) => Promise<T>
  post: <T>(url: string, data?: unknown) => Promise<T>
  put: <T>(url: string, data?: unknown) => Promise<T>
  delete: <T>(url: string) => Promise<T>
}

export interface ApiResponse<T> {
  data?: T
  error?: {
    message: string
    status: number
  }
}

export class ApiClient {
  private _baseURL = process.env.NEXT_PUBLIC_API_URL;
  constructor(
    private httpClient: HttpClient,
    private baseURL = this._baseURL
  ) {}

  private handleResponse = async <T>(
    promise: Promise<T>
  ): Promise<ApiResponse<T>> => {
    try {
      const data = await promise
      return { data }
    } catch (error: any) {
      return {
        error: {
          message: error.response?.data?.message || 'Erro inesperado',
          status: error.response?.status || 500
        }
      }
    }
  }

  protected get = <T>(path: string) => {
    return this.handleResponse<T>(
      this.httpClient.get(`${this.baseURL}${path}`)
    )
  }

  protected post = <T>(path: string, data?: unknown) => {
    return this.handleResponse<T>(
      this.httpClient.post(`${this.baseURL}${path}`, data)
    )
  }

  protected put = <T>(path: string, data?: unknown) => {
    return this.handleResponse<T>(
      this.httpClient.put(`${this.baseURL}${path}`, data)
    )
  }

  protected delete = <T>(path: string) => {
    return this.handleResponse<T>(
      this.httpClient.delete(`${this.baseURL}${path}`)
    )
  }
}
