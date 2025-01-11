import { Input as BaseInput } from "@mui/material"
import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  required: boolean;
  autoComp: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({type, required, autoComp, handleChange}: InputProps) {
  return(
    <BaseInput
      type={type}
      onChange={e => handleChange(e)}
      required={required}
      autoComplete={autoComp}
      sx={style}
    />
  );
}

const style = {
  backgroundColor: "white",
  borderRadius: 2,
  width: "100%",
  height: 40,
}
