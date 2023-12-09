import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const CheckboxInput = () => {
  return (
    <FormGroup className="px-2">
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#008026",
              },
            }}
          />
        }
        label="Remember Me"
      />
    </FormGroup>
  );
};

export default CheckboxInput;
