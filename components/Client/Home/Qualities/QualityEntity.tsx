import { ReactElement } from "react";
interface Props {
  icon: ReactElement;
  heading: String;
  content: String;
}
const QualityEntity:React.FC<Props> = ({ icon, heading, content }: Props) => {
  return (
    <div className="w-full flex flex-row items-center justify-start gap-3">
      {icon}
      <div className="flex flex-col gap-1 items-start justify-center">
        <p className="text-black font-bold text-base">{heading}</p>
        <p className="text-black text-sm">{content}</p>
      </div>
    </div>
  );
}

export default QualityEntity;
