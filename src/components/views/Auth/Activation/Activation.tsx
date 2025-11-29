import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import useActivate from "./hooks/useActivate";

const Activation = () => {
  const { isPending } = useActivate();

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
          src="/images/illustration/pending.svg"
          alt="Pending Illustration"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-danger-500">
          Verifying your account...
        </h1>
        <p className="font-regular text-xl text-default-500">
          Please wait a moment while we activate your account.
        </p>
        {isPending && <Spinner color="danger" size="lg" />}
      </div>
    </div>
  );
};

export default Activation;
