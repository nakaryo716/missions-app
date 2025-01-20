import { Box } from "@mui/material";
import Input from "./MyInput";
import { ChangeEvent } from "react";
import TextArea from "./TextArea";

interface MissionInputProps {
  handleSubmit: () => void;
  handleSetTitle: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSetDescription: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function MissionInput(props: MissionInputProps) {
  const {
    handleSubmit,
    handleSetTitle,
    handleSetDescription,
  } = props;

    return (
    <>
      <Box sx={{width: "80%", maxWidth: 500, padding: 5, color: "black"}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <h1>ミッションの追加</h1>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{marginBottom: 3}}>
            <label>ミッション名</label><br/>
              <Input type="text" handleChange={handleSetTitle} required={true} autoComp="a"/>
          </Box>
          <Box sx={{marginBottom: 3}}>
            <label>詳細</label><br />
            <TextArea handleChange={handleSetDescription}/>
          </Box>
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <input style={style} type="submit" value="追加"/>
          </Box>
        </form>
      </Box>
    </>
  )
}

const style = {
  height: 40,
  width: 100,
}
