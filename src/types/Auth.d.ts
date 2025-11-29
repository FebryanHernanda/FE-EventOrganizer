interface IRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILogin {
  identifier: string;
  password: string;
}

interface IResendActivation {
  email: string;
}

export type { IRegister, ILogin, IResendActivation };
