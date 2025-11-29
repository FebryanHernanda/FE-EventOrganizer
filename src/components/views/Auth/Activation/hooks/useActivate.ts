import authServices from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const useActivate = () => {
  const router = useRouter();

  const activateService = async (token: string) => {
    const result = await authServices.activate(token);
    return result;
  };

  const {
    mutate: mutateActivate,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: activateService,
    onError: async () => {
      await delay(1500);
      router.push("/auth/activation/failed");
    },
    onSuccess: async () => {
      await delay(1500);
      router.push("/auth/activation/success");
    },
  });

  useEffect(() => {
    if (!router.isReady) return;
    const { token } = router.query;

    if (!token) {
      router.push("/auth/activation/failed");
      return;
    }

    mutateActivate(token as string);
  }, [router.isReady, mutateActivate, router]);

  return {
    isPending,
    isSuccess,
    isError,
  };
};

export default useActivate;
