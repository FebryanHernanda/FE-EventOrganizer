import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IRegister, IResendActivation } from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activate: (token: string) =>
    instance.get(`${endpoint.AUTH}/activate?token=${token}`),
  resendActivation: (payload: IResendActivation) =>
    instance.post(`${endpoint.AUTH}/resend-activation`, payload),
};

export default authServices;
