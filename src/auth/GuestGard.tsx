'use client'
import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const GuestGard = ({ children }:{
    children: React.ReactNode
})=> {
  const { isAuthenticated } = useAppSelector((state) => state?.auth);
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/");
    
  }
  return children as React.JSX.Element;
}

export default GuestGard