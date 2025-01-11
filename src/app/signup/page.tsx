'use client'
import SignUp from "@/components/SignUp";
import { Box } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function SignUpPage() {

  const handleSubmit = () => {
    alert(userName + email + password);
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetUserName = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserName(e.target.value);
  };

  const handleSetEmail = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return(
    <>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <SignUp 
          handleSubmit={handleSubmit}
          handleSetUserName={handleSetUserName}
          handleSetEmail={handleSetEmail}
          handleSetPassword={handleSetPassword}
        />
      </Box>
    </>
  )
}
