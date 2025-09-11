"use client"
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/admin/login";

  if (isAuthPage) return <>{children}</>;
  return (
    <>
      <Header>{children}</Header>
      <Footer />
    </>
  );
}
