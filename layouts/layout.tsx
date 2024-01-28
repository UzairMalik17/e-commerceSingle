import React from "react";
import Navbar from "@/components/Client/Navigation/ClientNavigation";
import Footer from "@/components/Client/Footer/Footer";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Sidebar from "@/components/Client/Dashboard/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });
type Props = {
  children: React.ReactNode;
};

const layout: React.FC<Props> = ({ children }: Props) => {
  const Router = useRouter();
  const AdminRoute = Router.pathname.includes("/admin");
  return (
    <div
      className={`w-full h-full grid grid-cols-1 ${
        AdminRoute && "md:grid-cols-[250px,calc(100%-250px)]"
      } ${inter.className}`}>
      {!AdminRoute && <Navbar />}
      {AdminRoute && (
        <div className={`w-full h-20 md:h-screen sticky top-0`}>
          <Sidebar />
        </div>
      )}
      <div className={`w-full h-full ${AdminRoute && "px-4"}`}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
