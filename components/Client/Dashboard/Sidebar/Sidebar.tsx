import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Data } from "@/constants/DummyData/Data";
import { FiEdit } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const SidebarMenu = [
  {
    name: "Dashboard",
    route: "/admin/dashboard",
  },
  {
    name: "Messages",
    route: "/admin/messages",
  },
  {
    name: "Buyers",
    route: "/admin/buyers",
  },
  {
    name: "Orders",
    route: "/admin/orders",
  },
  {
    name: "Products",
    route: "/admin/products",
  },
  {
    name: "Sign Out",
    route: "#",
  },
];
const Sidebar = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full h-full bg-background">
      <div className="w-full h-full hidden md:flex flex-col items-center justify-between p-4">
        <div className="w-full h-full flex flex-col items-center justify-start gap-8">
          <Link href="/" className="relative w-[153px] h-[70px]">
            <Image
              src={Data.logo.white}
              alt="Shop O"
              fill
              className="object-contain"
            />
          </Link>
          <div className="w-full flex flex-col items-center justify-start gap-4">
            <p className="text-sm">Welcome back</p>
            <div className="relative w-[60px] h-[60px] bg-[url('/Assets/Dashboard/User.jpg')] bg-center bg-cover bg-no-repeat rounded-full group">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-50 hover:cursor-pointer transition-opacity">
                <FiEdit className="w-[25px] h-[25px] text-white opacity-0 group-hover:opacity-100" />
              </div>
              <div className="w-3 h-3 rounded-full bg-leafGreen absolute right-0.5 bottom-0.5 z-20 border-2 border-solid border-background">
                <div className="w-full h-full rounded-full animate-ping bg-leafGreen z-20"></div>
              </div>
            </div>
            <p className="text-lg">John Doe</p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-start gap-6">
            {SidebarMenu.map((item, index) => {
              const active = Router.pathname == item.route;
              return (
                <Link
                  key={index}
                  href={item.route}
                  className={`relative text-[13px] after:w-0 after:absolute after:h-[2px] after:left-0 after:bottom-0 after:transition-all after:duration-300 after:hover:w-full after:bg-yellow-500 ${
                    active && "text-yellow-500"
                  }`}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-end">
          <Link
            href={"/"}
            className="w-full text-center text-white-main bg-black-main py-2">
            Continue Shopping
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex md:hidden items-center justify-between bg-background px-4">
        <div className="w-8 h-8">
          <RiMenu2Line className="w-full h-full" onClick={toggleDrawer} />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            size={"70vw"}>
            <div className="w-full h-full flex flex-col items-center justify-between bg-background p-4">
              <div className="w-full h-full flex flex-col items-center justify-start gap-8">
                <Link href="/" className="relative w-[153px] h-[70px]">
                  <Image
                    src={Data.logo.white}
                    alt="Shop O"
                    fill
                    className="object-contain"
                  />
                </Link>
                <div className="w-full flex flex-col items-center justify-start gap-4">
                  <p className="text-sm">Welcome back</p>
                  <div className="relative w-[60px] h-[60px] bg-[url('/Assets/Dashboard/User.jpg')] bg-center bg-cover bg-no-repeat rounded-full group">
                    <div className="w-full h-full flex items-center justify-center rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-50 hover:cursor-pointer transition-opacity">
                      <FiEdit className="w-[25px] h-[25px] text-white opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-leafGreen absolute right-0.5 bottom-0.5 z-20 border-2 border-solid border-background">
                      <div className="w-full h-full rounded-full animate-ping bg-leafGreen z-20"></div>
                    </div>
                  </div>
                  <p className="text-lg">John Doe</p>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-start gap-6">
                  {SidebarMenu.map((item, index) => {
                    const active = Router.pathname == item.route;
                    return (
                      <Link
                        key={index}
                        href={item.route}
                        className={`relative text-[13px] after:w-0 after:absolute after:h-[2px] after:left-0 after:bottom-0 after:transition-all after:duration-300 after:hover:w-full after:bg-yellow-500 ${
                          active && "text-yellow-500"
                        }`}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="w-full h-full flex flex-col items-center justify-end px-4">
                  <Link
                    href={"/"}
                    className="w-full text-center text-white-main bg-black-main py-2">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
        <Link href="/" className="relative w-[113px] h-[30px]">
          <Image
            src={Data.logo.white}
            alt="Shop O"
            fill
            className=" object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
