import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import BtnLogin from "../components/BtnLogin";

const Login = ({ providers }) => {
  console.log(providers);
  return (
    <div className="relative flex flex-col w-full min-h-screen justify-center items-center">
      <Image
        src="/login.jpg"
        alt="login hero"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col border justify-center items-center space-y-10 bg-white px-5 py-8 rounded-xl z-10">
        <h1 className="text-3xl">Sign In</h1>
        <div className="space-y-1 flex flex-col">
          <button onClick={() => signIn(providers.google.id)}>
            <BtnLogin
              styling={`text-black bg-white`}
              provider={providers.google}
            />
          </button>
          <button onClick={() => signIn(providers.facebook.id)}>
            <BtnLogin
              styling={`text-white bg-blue-500`}
              provider={providers.facebook}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Login;
