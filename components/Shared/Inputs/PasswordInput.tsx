import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
interface Props {
  label: string;
  IsCompulsory: boolean;
  placeholder: string;
  name?: string;
  state: string;
  SetState: any;
}
const PasswordInput: React.FC<Props> = ({
  label,
  state,
  SetState,
  IsCompulsory,
  placeholder,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl
      sx={{
        m: 1,
        width: "100%",
        "& label.Mui-focused": {
          color: "#ffbb38",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#008026",
          },
        },
      }}
      variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        required={IsCompulsory}
        value={state}
        onChange={SetState}
        placeholder={placeholder}
        name={name}
      />
    </FormControl>
  );
};
export default PasswordInput;
