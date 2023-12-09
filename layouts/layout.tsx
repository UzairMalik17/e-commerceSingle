import React from "react";
import Navbar from "@/components/Client/Navigation/ClientNavigation";
import Footer from "@/components/Client/Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
type Props = {
  children: React.ReactNode;
};
const layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={`w-full h-full ${inter.className}`}>
      <Navbar />
      <div className={`w-full h-full `}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
