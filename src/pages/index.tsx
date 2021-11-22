import { useRouter } from "next/router";
import React from "react";
import App from "./_app";

const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    if (router.pathname === "/") {
      router.push("/dashboard");
    } else {
      router.push("/account/login");
    }
  }, []);
  return App;
};

export default Index;
