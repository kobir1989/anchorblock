export interface LoginInput {
  email: string
  password: string
  remeberPassword?: boolean
}

export interface SignupInput extends LoginInput {
  name: string
  termsConditions: boolean
}

export interface LoginError {
  email: string
  password: string
}

export interface SignupError extends LoginError {
  name: string
  termsConditions: string
}
