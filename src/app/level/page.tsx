import StatusBar from "@/components/StatusBar";
import { Box } from "@mui/material";

export default function LevelPage() {
  return(
    <>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "80vh"}}>
        <StatusBar level={10} expRatio={50}/>

      </Box>
    </>
  )
}
