import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

const ActivationSuccess = () => {
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
          src="/images/illustration/success.svg"
          alt="success Illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-danger-500">
          Account Activated!
        </h1>
        <p className="font-regular text-xl text-default-500">
          Your account is now active. You can log in below.
        </p>

        <Button
          className="font-semibold text-danger-500"
          variant="bordered"
          color="danger"
          onClick={() => router.push("/")}
        >
          Go to Login
        </Button>
      </div>
    </div>
  );
};

export default ActivationSuccess;
