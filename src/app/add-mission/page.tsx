'use client'
import Header from "@/components/Header";
import MissionInput from "@/components/MissionInput";
import { Box } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function AddMissionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string | null>(null);
  const handleSubmit = () => {
    alert(title + description);
  };

  const handleSetTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleSetDescription = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }

  return(
    <>
      <Box sx={{marginBottom: 2}}>
        <Header />
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "85vh", backgroundColor: "#f5f5f5"}}>
        <Box sx={style}>
          <MissionInput
            handleSubmit={handleSubmit}
            handleSetTitle={handleSetTitle}
            handleSetDescription={handleSetDescription}
          />
        </Box>
      </Box>
    </>
  )
}

const style = {
  maxWidth: 500,
  width: "100%",
};
