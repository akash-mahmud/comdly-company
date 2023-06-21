import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { useAppSelector } from "@/store";

export default function AuthenticateGard({ children }: {
    children:React.ReactNode
}) {
  const { isAuthenticated, user } = useAppSelector((state) => state?.auth);

  const [showAuth, setShowAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const allowed = isAuthenticated && user?.role==='company';

    if (!allowed) {
      router.push("/login");
    }
    const timeoutId = setTimeout(() => {
      setShowAuth(false);
    }, 500);
    return () => {
      clearTimeout(timeoutId); // Cancel the timeout when the component is unmounted
    };
  }, []);

  if (showAuth) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          width: "100%",
        }}
      >
        <Spin spinning={true} />
      </div>
    );
  }
  return children as React.JSX.Element;
}