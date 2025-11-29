import authServices from "@/services/auth";
import { ILogin } from "@/types/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your email or username"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});

const useLogin = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const togglePassword = () => setIsVisible(!isVisible);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const loginService = async (payload: ILogin) => {
    const res = await authServices.login(payload);
    return res.data;
  };

  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: loginService,

    onSuccess: (res) => {
      const token = res.data.token;

      localStorage.setItem("access_token", token);
      router.push("/");
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.msg ||
        "Login failed";

      if (message.includes("invalid credentials")) {
        setError("root", {
          message: "Invalid email/username or password",
        });
        return;
      }

      if (message.toLowerCase().includes("not activated")) {
        const identifier = getValues("identifier");
        router.push(`/auth/activation/not-activated?email=${identifier}`);
        return;
      }

      setError("root", { message });
    },
  });

  return {
    isVisible,
    togglePassword,
    control,
    handleSubmit,
    mutateLogin,
    isPending,
    errors,
    clearErrors,
  };
};

export default useLogin;
