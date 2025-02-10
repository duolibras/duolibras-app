export interface SignInResponse {
  accessToken: string
}

export interface ApiError {
  message: string
}

export type Account = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  updateAt: string;
}

export interface ProfileDTO {
  account: Account;
}

export enum Role {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}
