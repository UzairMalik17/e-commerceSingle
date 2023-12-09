import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/Client/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <main className={`w-full h-full ${inter.className}`}>
      <Home />
    </main>
  );
}
