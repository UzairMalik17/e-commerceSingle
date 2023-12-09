import TimerWrapper from "./TimerWrapper";
import { AiOutlineRight } from "react-icons/ai";

const time = [
  {
    time: 0,
    timeUnit: "Days",
    style: "text-red",
  },
  {
    time: 0,
    timeUnit: "Hours",
    style: "text-blue",
  },
  {
    time: 0,
    timeUnit: "Minutes",
    style: "text-main-off",
  },
  {
    time: 0,
    timeUnit: "Seconds",
    style: "text-pink-500",
  },
];
const Sale = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full h-[450px] bg-[url('/Assets/Home/SaleAndApp/campaign-cover-countdown.jpg')] bg-cover bg-center bg-no-repeat group px-8 py-4 lg:py-8">
        <div className="w-full h-full flex flex-col gap-12">
          <div className="w-full grid grid-cols-4">
            {time.map((item, index) => {
              return (
                <TimerWrapper
                  key={index}
                  time={item.time}
                  timeUnit={item.timeUnit}
                  style={item.style}
                />
              );
            })}
          </div>
          <p className="text-5xl font-semibold">WOO! Flash Sale</p>
          <div className="w-[100px] flex flex-row gap-1 items-center justify-start font-medium bg-transparent relative overflow-hidden">
            <p className="z-10">Shop Now</p>
            <AiOutlineRight className="z-10" />
            <div className="w-full h-0.5 bottom-0 absolute bg-lightningYellow  group-hover:h-full transition-all duration-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
