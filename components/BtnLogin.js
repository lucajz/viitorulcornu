import React from "react";
import { signIn } from "next-auth/react";

const BtnLogin = ({ provider, styling }) => {
  return (
    <div
      className={`${styling} w-60 h-12 text-center border rounded-xl py-3 text-sm t`}
    >
      Sign in with {provider.name}
    </div>
  );
};

export default BtnLogin;
