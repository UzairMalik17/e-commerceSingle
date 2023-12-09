import { Inter } from "next/font/google";
import LoginForm from "@/components/Client/Login/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function login() {
  return (
    <main className={`w-full h-full ${inter.className}`}>
      <LoginForm />
    </main>
  );
}
