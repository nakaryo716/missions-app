import Header from "@/components/Header";
import StatusBar from "@/components/StatusBar";
import { Box } from "@mui/material";

export default function LevelPage() {
  return(
    <>
      <Box sx={{marginBottom: 2}}>
        <Header />
      </Box>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "85vh", backgroundColor: "#f5f5f5"}}>
        <StatusBar level={10} expRatio={50}/>
      </Box>
    </>
  )
}
