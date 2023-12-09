import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { BsCart3 } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import { GoShieldLock } from "react-icons/go";
import { TfiCup } from "react-icons/tfi";
import QualityEntity from "./QualityEntity";
const qualities = [
  {
    icon: <BsCart3 className="w-12 h-12 text-lightningYellow" />,
    heading: "Free Shipping",
    content: "When ordering over $100",
  },
  {
    icon: <RxReload className="w-12 h-12 text-lightningYellow" />,
    heading: "Free Return",
    content: "Get Return within 30 days",
  },
  {
    icon: <GoShieldLock className="w-12 h-12 text-lightningYellow" />,
    heading: "Secure Payment",
    content: "100% Secure Online Payment",
  },
  {
    icon: <TfiCup className="w-12 h-12 text-lightningYellow" />,
    heading: "Best Quality",
    content: "Original Product Guarenteed",
  },
];
const Qualities = () => {
  return (
    <Wrapper>
      <div className="w-full grid lg:grid-cols-4 gap-12 lg:gap-0 py-10 lg:py-16 px-10 lg:px-0">
        {qualities.map((item, index) => {
          return (
            <QualityEntity
              key={index}
              icon={item.icon}
              content={item.content}
              heading={item.heading}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Qualities;
