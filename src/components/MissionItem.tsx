import {Box, Card, Modal, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "./Button";
import { useState } from "react";

interface MissionProps {
  mission: DailyMission
}
export default function MissionItem({ mission }: MissionProps) {
  const [open, setOpen] = useState(false);
  const openHandle = () => setOpen(true);
  const closeHandle = () => setOpen(false);

  const cardColor = mission.isComplete ? "#dcdcdc": "#faf0e6";

  const cardStyle = {
    borderRadius: 10,
    backgroundColor: cardColor,
    maxWidth: "500px",
    height: 90,
    margin: 10
  }

  return (
    <>
      <Card style={cardStyle}> 
        <Box>
          <Typography variant="subtitle1" style={typoStyle}>
            {mission.title}
          </Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <Button 
            color="black"
            backGroundColor="silver"
            onclickEvent={openHandle}
          >
            {"詳細"}
          </Button>
          {
            mission.isComplete ? 
            <CheckCircleIcon sx={checkStyle}/>: 
            <Button
            color="white"
            backGroundColor="orange"
            onclickEvent={() => console.log("on click")}
            >
              {"完了"}
            </Button>
          }
        </Box>
      </Card>

      <Modal open={open} onClose={closeHandle}>
        <Card sx={modalCardStyle}>
          <Box>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{textAlign: "center"}}>
              {mission.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {mission.description}
            </Typography>
          </Box>
        </Card>
      </Modal>
    </>
  )
}

const typoStyle = {
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  maxHeight: 28
}

const checkStyle = {
  color: "green",
  marginRight: 2,
  marginLeft: 1,
  width: 50,
  height:  40,
}

const modalCardStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '80%', sm: '70%', md: '60%' },
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '1px solid black',
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};
