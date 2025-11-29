import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
  const router = useRouter();

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
          alt="Email Send Illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-danger-500">
          Create Account Success
        </h1>
        <p className="text-xl font-semibold text-default-500">
          Check your email for account activation
        </p>
        <Button
          className="mt-4 w-fit"
          variant="bordered"
          color="danger"
          onClick={() => router.push("/")}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
