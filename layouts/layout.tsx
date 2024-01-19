import React from "react";
import Navbar from "@/components/Client/Navigation/ClientNavigation";
import Footer from "@/components/Client/Footer/Footer";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
type Props = {
  children: React.ReactNode;
};

const layout: React.FC<Props> = ({ children }: Props) => {
  const Router = useRouter();
  const AdminRoute = Router.pathname.includes("/admin");
  return (
    <div
      className={`w-full h-full grid ${
        AdminRoute && "md:grid-cols-[250px,calc(100%-258px)]"
      } ${inter.className}`}>
      {!AdminRoute && <Navbar />}
      {AdminRoute && (
        <div className={`w-full h-screen bg-slate-600`}>sidebar</div>
      )}
      <div className={`w-full h-full`}>
        <main>{children}</main>
        main screen
        <Footer />
      </div>
    </div>
  );
};

export default layout;
