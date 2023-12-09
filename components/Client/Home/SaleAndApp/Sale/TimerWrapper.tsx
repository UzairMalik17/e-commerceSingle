import React from "react";
interface Props {
  time: number;
  timeUnit: String;
  style: String;
}
const TimerWrapper: React.FC<Props> = ({ time, timeUnit, style }: Props) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-2">
      <div
        className={`sm:w-24 w-12 sm:h-24 h-12 flex items-center justify-center bg-white-main rounded-full bg-white font-bold text-3xl ${style}`}>
        {time}
      </div>
      <p className="font-medium text-base">{timeUnit}</p>
    </div>
  );
};

export default TimerWrapper;
