interface IRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IResendActivation {
  email: string;
}

export type { IRegister, IResendActivation };
