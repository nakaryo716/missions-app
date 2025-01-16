import { Box, LinearProgress } from "@mui/material";

interface StatusBarProps {
  level: number,
  expRatio: number,
}

export default function StatusBar({level, expRatio}: StatusBarProps) {
  return(
    <Box sx={s}>
      <Box sx={{marginLeft: 2}}>
        <h3>Level {level}</h3>
      </Box>
      <LinearProgress sx={style} variant="determinate" value={expRatio}/>
  </Box>
  )
}

const s = {
  marginBottom: 3,
  height: "60"
}

const style = {
  width: "50vw",
  height: 10,
  borderRadius: 100,
  margin: 2,
}
