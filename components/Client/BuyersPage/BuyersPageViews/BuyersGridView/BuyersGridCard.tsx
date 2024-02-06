import React from "react";
import { useRef } from "react";
import BuyersPopup from "@/components/Client/Dashboard/BuyersCard/BuyersPopup/BuyersPopup";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdMapsHomeWork } from "react-icons/md";
interface Props {
  img: string;
}
const BuyersGridCard: React.FC<Props> = ({ img }) => {
  const dialogRef = useRef<HTMLDialogElement>();
  return (
    <section className="w-[600px] h-full flex flex-col items-center justify-start gap-4 bg-background border-[1px] drop-shadow-lg rounded-lg border-lightGray p-4">
      <div className="w-full grid grid-cols-[0.75fr,2.25fr] items-center justify-center gap-2">
        <div className="w-full flex item-center justify-center">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
            className={`w-[60px] h-[60px] bg-center bg-cover bg-no-repeat rounded-full drop-shadow-lg border-4 border-white-main`}></div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex flex-row items-center justify-between gap-2">
            <p>Jason Jacob</p>
            <button
              className="flex items-center justify-start"
              onClick={() => {
                dialogRef.current?.showModal();
              }}>
              <p className="w-6 flex items-center justify-center font-extrabold text-center rounded bg-gray ">
                ...
              </p>
            </button>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="w-full flex items-center justify-start gap-2">
              <FaPhoneAlt />
              <p className={``}>+923409574</p>
            </div>
            <div className="w-full flex items-center justify-start gap-2">
              <LuMail />
              <p className={``}>JhonMckay@gmail.com</p>
            </div>
            <div className="w-full flex items-center justify-start gap-2">
              <MdMapsHomeWork />
              <p className={``}>st Paul Street Los Vegas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-lightGray"></div>
      <div className="w-full h-full flex items-center justify-between gap-4">
        <div className="flex flex-col justify-center item-center text-center gap-4">
          <p>Purchased Products</p>
          <p>23</p>
        </div>
        <div className="w-[2px] h-full bg-lightGray"></div>
        <div className="flex flex-col justify-center item-center text-center gap-4">
          <p>Amount Spent</p>
          <p>$453</p>
        </div>
      </div>
      <BuyersPopup
        reference={dialogRef}
        image={img}
        CloseHandler={() => {
          dialogRef.current?.close();
        }}
      />
    </section>
  );
};

export default BuyersGridCard;
