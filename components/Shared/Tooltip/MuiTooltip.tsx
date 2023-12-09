import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

interface Props {
  children: any;
  Text: string;
  position?:
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | undefined;
}

const MuiTooltip = ({ children, Text, position = "top" }: Props) => {
  return (
    <Tooltip TransitionComponent={Zoom} title={Text} placement={position} arrow>
      {children}
    </Tooltip>
  );
};

export default MuiTooltip;
