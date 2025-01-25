/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpClient = {
  get: <T>(url: string, headers?: Record<string, string>) => Promise<T>;
  post: <T>(url: string, data?: unknown, headers?: Record<string, string>) => Promise<T>;
  put: <T>(url: string, data?: unknown, headers?: Record<string, string>) => Promise<T>;
  delete: <T>(url: string, headers?: Record<string, string>) => Promise<T>;
};

export interface ApiResponse<T> {
  data?: T
  error?: {
    message: string
    status: number
  }
}

export class ApiClient {
  private _baseURL = process.env.NEXT_PUBLIC_API_URL;
  private accessToken: string | null = null;

  constructor(
    private httpClient: HttpClient,
    private baseURL = 'http://localhost:3001'
  ) {}

  setAccessToken(token: string | null) {
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    console.log('cheguei')
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken);
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return headers;
  }

  private handleResponse = async <T>(
    promise: Promise<T>
  ): Promise<ApiResponse<T>> => {
    try {
      const data = await promise;
      return { data };
    } catch (error: any) {
      return {
        error: {
          message: error.response?.data?.message || 'Erro inesperado',
          status: error.response?.status || 500,
        },
      };
    }
  };


  protected get = <T>(path: string) => {
    return this.handleResponse<T>(
      this.httpClient.get(`${this.baseURL}${path}`, this.getHeaders())
    );
  };

  protected post = <T>(path: string, data?: unknown) => {
    return this.handleResponse<T>(
      this.httpClient.post(`${this.baseURL}${path}`, data, this.getHeaders())
    );
  };

  protected put = <T>(path: string, data?: unknown) => {
    return this.handleResponse<T>(
      this.httpClient.put(`${this.baseURL}${path}`, data, this.getHeaders())
    );
  };

  protected delete = <T>(path: string) => {
    return this.handleResponse<T>(
      this.httpClient.delete(`${this.baseURL}${path}`, this.getHeaders())
    );
  };
}
