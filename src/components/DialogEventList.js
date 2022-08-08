import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  ListItemText,
  MenuItem,
  ListItemIcon,
  Alert,
  Stack
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import React, { useEffect, useState} from "react";
import DialogEvent from "./DialogEvent";

const DialogEventList = ({ open, close,  date}) => {
  const [events,setEvents] = useState([]);
  const [openDialog,setOpenDialog] = useState(false);
  const [openAlert,setOpenAlert] = useState(false);

  useEffect (() => {
    setEvents([{place:'Terminal', pub1: 'Erika', pub2: 'Brian',hour:'10:30-12:00',date:'2022-8-03'},
                {place:'Plaza', pub1: 'Leo', pub2: 'Brian',hour:'10:30-12:00',date:'2022-8-03'}]);
  },[]);

 

  const handleClickOpen = () =>{
    setOpenDialog(true);
  }
  const handleClose = () =>{
    setOpenDialog(false);
    
  }
  const changeStateOpenAlert = () =>{
    setOpenAlert(true);
  }
  //Functions 
  const addEvent = (newElement) =>{
    setEvents([...events, newElement]);
    events.forEach((el)=>{
        console.log(el);        
    })
    handleClose();
    changeStateOpenAlert();
  }
  return (
    <>
      <Dialog
        maxWidth =  "md"
        fullWidth
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography align="center">Arreglos</Typography>
        </DialogTitle>
        {events.map((event,i) => {
          return (
            <DialogContent key={"event_list_" + i}>
              <DialogContentText id="alert-dialog-description">
                
                <MenuItem>
                  <ListItemIcon>
                    <GroupIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText  key={"info1_" + i}>{event.pub1 + " y"}  {event.pub2}</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <PublicIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText key={"info2_" + i}>{event.place}</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <WatchLaterIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText  key={"info3_" + i}>{event.hour}</ListItemText>
                </MenuItem>
              </DialogContentText>
            </DialogContent>
          );
        })}

        <DialogActions>
          <IconButton onClick={handleClickOpen}>
            <AddIcon  />
          </IconButton>
          <Button onClick={close} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {openDialog ? (
        <DialogEvent
          date = {date}
          open={openDialog ? openDialog : false}
          close={handleClose}
          addEvent={addEvent}
        />
      ) : (
        <></>
      )}
      {openAlert ? ( () =>{ console.log('h')}): (<></>)}
    </>
    
  );
};
export default DialogEventList;
