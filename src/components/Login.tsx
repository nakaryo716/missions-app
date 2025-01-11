import { Box } from "@mui/material";
import { ChangeEvent } from "react";
import MyInput from "./MyInput";

interface LoginProps {
  handleSubmit: () => void;
  handleSetEmail: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSetPassword: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function Login(props: LoginProps) {
  const {
    handleSubmit,
    handleSetEmail,
    handleSetPassword,
  } = props;

  return(
    <>
      <Box sx={{width: "80%", maxWidth: 500, padding: 5, backgroundColor: "#b0c4de", color: "black"}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <h1>Missionsにログイン</h1>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{marginBottom: 3}}>
            <label>メールアドレス</label><br />
            <MyInput type="email" handleChange={handleSetEmail} required={true} autoComp="" />
          </Box>
          <Box sx={{marginBottom: 3}}>
            <label>パスワード</label><br />
            <MyInput type="password" handleChange={handleSetPassword} required={true} autoComp="new-password" />
          </Box>
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <input type="submit" value="Missionsにログイン"/>
          </Box>
        </form>
      </Box>
    </>
  )
}
