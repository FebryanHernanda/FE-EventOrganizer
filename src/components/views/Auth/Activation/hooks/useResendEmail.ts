import authServices from "@/services/auth";
import { IResendActivation } from "@/types/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const resendActivationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please input your Email"),
});

const useResendActivation = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(resendActivationSchema),
  });

  const resendService = async (payload: IResendActivation) => {
    const result = await authServices.resendActivation(payload);
    return result;
  };

  const {
    mutate: mutateResend,
    isPending: isPendingResend,
    isSuccess,
  } = useMutation({
    mutationFn: resendService,
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Something went wrong";

      setError("root", { message });
    },
    onSuccess: () => {
      reset();
    },
  });

  const handleResend = (data: IResendActivation) => mutateResend(data);

  return {
    control,
    register,
    handleSubmit,
    handleResend,
    errors,
    isPendingResend,
    isSuccess,
  };
};

export default useResendActivation;
