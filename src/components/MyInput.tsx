import { TextField } from "@mui/material"
import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  required: boolean;
  autoComp: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({type, required, autoComp, handleChange}: InputProps) {
  return(
    <TextField
      variant="filled"
      type={type}
      required={required}
      autoComplete={autoComp}
      onChange={handleChange}
      fullWidth
    />
  );
}
