import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import useResendActivation from "../hooks/useResendEmail";
import { Controller } from "react-hook-form";

const NotActivatedView = () => {
  const router = useRouter();
  const emailQuery = router.query.email as string;

  const {
    control,
    handleSubmit,
    handleResend,
    errors,
    isPendingResend,
    isSuccess,
  } = useResendActivation();

  const defaultEmail = emailQuery ?? "";

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
        <h1 className="text-3xl font-bold text-danger-500">
          Account Not Activated
        </h1>
        <p className="font-regular text-xl text-default-500">
          We sent an activation link to your email.
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
            defaultValue={defaultEmail}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
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

          <Button
            type="button"
            variant="bordered"
            color="danger"
            className="font-semibold text-danger-500"
            onPress={() => router.push("/auth/login")}
          >
            Back to Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NotActivatedView;
