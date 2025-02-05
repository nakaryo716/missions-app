'use client'

import Header from "@/components/Header";
import MissionsList from "@/components/MissionsList";
import { Box } from "@mui/material";

export default function MissionsPage() {
  return(
    <>
      <Box sx={{marginBottom: 2}}>
        <Header />
      </Box>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "85vh", backgroundColor: "#f5f5f5"}}>
        <MissionsList missions={missions} />
      </Box>
    </>
  );
}

const mission: DailyMission = {
  userId: "asd",
  missionId: "asdfadf",
  title: "test1 false",
  description: "okoko",
  isComplete: false,
}

const mission2: DailyMission = {
  userId: "asd",
  missionId: "assdfgmsfdgmdfadf",
  title: "test2 ture",
  description: null,
  isComplete: true,
}

const mission3: DailyMission = {
  userId: "asd",
  missionId: "asdfadasdfasdf asdf",
  title: "test3 false",
  description: "okoko",
  isComplete: false,
}

const mission4: DailyMission = {
  userId: "asdadfa",
  missionId: "asdfadfasasdfbsdafhmadfa",
  title: "test4 true",
  description: "okoko",
  isComplete: true,
}

const mission5: DailyMission = {
  userId: "asd",
  missionId: "asdfadasdfasdma fgasdf",
  title: "test5 false",
  description: "okoko",
  isComplete: false,
}

const mission6: DailyMission = {
  userId: "asd",
  missionId: "asdfasdfba sadfadf",
  title: "test6 false",
  description: "okoko",
  isComplete: false,
}


const mission7: DailyMission = {
  userId: "asd",
  missionId: "asdfasdfadf",
  title: "test7 false",
  description: "okoko",
  isComplete: false,
}

const missions: DailyMission[] = [mission, mission2, mission3, mission4, mission5, mission6, mission7];
