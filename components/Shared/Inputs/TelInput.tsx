import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
interface Props {
  state: any;
  SetState: any;
  IsCompulsory: boolean;
  Name: string;
}
const TelInput: React.FC<Props> = ({ state, SetState, IsCompulsory, Name }) => {
  return (
    <PhoneInput
      inputStyle={{
        width: "100%",
        height: "60px",
        fontSize: "18px",
        padding: "0px 80px",
      }}
      inputProps={{
        name: { Name },
        required: { IsCompulsory },
      }}
      buttonStyle={{
        padding: "0 8px",
      }}
      country={"us"}
      value={state}
      onChange={SetState}
    />
  );
};
export default TelInput;
