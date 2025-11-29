import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import useResendActivation from "../hooks/useResendEmail";
import { Controller } from "react-hook-form";

const ActivationFailed = () => {
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    handleResend,
    errors,
    isPendingResend,
    isSuccess,
  } = useResendActivation();

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-5">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.png"
          alt="Logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/email-send.svg"
          alt="Email send Illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="text-3xl font-bold text-danger-500">Account Failed!</h1>
        <p className="font-regular text-xl text-default-500">
          Your activation link is invalid or expired.
          <br /> Enter your email to resend the activation link.
        </p>

        <form
          onSubmit={handleSubmit(handleResend)}
          className="mt-2 flex w-full max-w-sm flex-col gap-4"
        >
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          {errors.root && (
            <p className="text-sm text-red-500">{errors.root.message}</p>
          )}

          {isSuccess && (
            <p className="text-center text-sm text-green-600">
              Activation email sent successfully!
            </p>
          )}

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
            )}
          />

          <Button
            color="danger"
            size="md"
            type="submit"
            disabled={isPendingResend}
          >
            {isPendingResend ? "Sending..." : "Resend Activation Email"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ActivationFailed;
