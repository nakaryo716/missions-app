import Header from "@/components/Header";
import { Box } from "@mui/material";

export default function AddMissionPage() {
  return(
    <>
      <Box sx={{marginBottom: 2}}>
        <Header />
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "85vh", backgroundColor: "#f5f5f5"}}>
        <h1>Add mission</h1>
      </Box>
    </>
  )
}
