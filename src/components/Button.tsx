import {Button as MuiButton} from "@mui/material"

interface ButtonProps {
  children: string;
  color: string;
  backGroundColor: string;
  onclickEvent: () => void;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    color,
    backGroundColor,
    onclickEvent
  } = props;

  const styles = {
    color: color,
    backgroundColor: backGroundColor,
    borderRadius: 25,
    marginTop: 1,
    marginRight: 10,
  }
  
  return(
    <MuiButton style={styles} variant="contained" onClick={onclickEvent}>
      {children}
    </MuiButton>
  )
}
