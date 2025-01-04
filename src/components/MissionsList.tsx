import { List } from "@mui/material";
import MissionItem from "./MissionItem";

interface MissionsListProps {
  missions: DailyMission[];
}

export default function MissionsList({ missions }: MissionsListProps) {
  return(
    <>
      <List sx={listStyle}>
        {
          missions.filter(e => !e.isComplete).map(e => {
            return(
              <MissionItem key={e.missionId} mission={e} />
            )
          })
        }
        {
          missions.filter(e => e.isComplete).map(e => {
            return(
              <MissionItem key={e.missionId} mission={e} />
            )
          })
        }
      </List>     
    </>
  )
}

const listStyle = {
  width: '100%',
  maxWidth: 500,
  overflow: 'auto',
  height: '80vh',
  '& ul': { padding: 0 },   
  justifyContent: "center",
  alignItems: "center",

  '@media (max-width:600px)': {
    maxWidth: '90%',
    height: '65vh',
  },

  '@media (min-width:601px) and (max-width:960px)': {
    maxWidth: '90%',
    height: '60vh',  
  },
};
