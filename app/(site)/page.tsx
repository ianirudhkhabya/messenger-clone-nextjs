import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        min-h-full
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      <div
        className="
          sm:mx-auto
          sm:w-full
          sm:max-w-md
        "
      >
        <Image
          alt="Logo"
          height={64}
          width={64}
          className="mx-auto w-auto"
          src="/img/logo.png"
        />
        <h2
          className="
            mt-6
            text-3xl
            text-center
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
