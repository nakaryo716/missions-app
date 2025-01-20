import { Textarea } from "@mui/joy";
import { ChangeEvent } from "react";

interface TextAreaProps {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function TextArea({ handleChange}: TextAreaProps) {
  return(
    <Textarea onChange={handleChange}
      minRows={1}
      maxRows={100}
      size="md"
      sx={style}
    />
  )
}


const style = {
  height: 150
}
