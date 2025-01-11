'use client'
import Login from "@/components/Login";
import { Box } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function SignUpPage() {

  const handleSubmit = () => {
    alert(email + password);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return(
    <>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <Login
          handleSubmit={handleSubmit}
          handleSetEmail={handleSetEmail}
          handleSetPassword={handleSetPassword}
        />
      </Box>
    </>
  )
}
