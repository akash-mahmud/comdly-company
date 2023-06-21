import React, { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { CompanyRole } from "@/graphql/generated/schema";
import { useAppSelector } from "@/store";

export default function RolebasedAuth({ children, companyRole }:{
    children:React.ReactNode,
    companyRole?:[CompanyRole]
}) {
  const { isAuthenticated, user } = useAppSelector((state) => state?.auth);

  const [showAuth, setShowAuth] = useState(true);
  const router = useRouter();
console.log(companyRole);

  useEffect(() => {
    
    const allowed =
      isAuthenticated &&
      (companyRole?.includes(user?.companyRole as CompanyRole));

    if (!allowed) {
      notFound()
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