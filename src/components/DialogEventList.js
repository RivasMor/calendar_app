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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import DialogEvent from "./DialogEvent";
import "../index.css";
import db from "../Firebase/firebaseConfig";

import SweetAlert2 from "react-sweetalert2";
import { async } from "@firebase/util";

const DialogEventList = ({ open, close, date }) => {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [swalProps, setSwalProps] = useState({});

  

  useEffect(() => {    
    const obtenerDatos = async () =>{
      const datos = await getDocs(collection(db,'events'));      
      
      let dataFromFirestone = datos.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      
      setEvents(dataFromFirestone.filter(dato => dato.date === date))
  
    }   
    obtenerDatos();
    
  }, []);

  

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  //Functions
  const addEvent = (newElement) => {
    setEvents([...events, newElement]);
    events.forEach((el) => {
      console.log(el);
    });
    setOpenDialog(false);
    setSwalProps({
      show: true,
      text: "Evento Agregado",
      icon: "success",
    });
    try {
      const guardarDatos = async () =>{
      const docRef = await addDoc(collection(db, "events"), {
        date: newElement.date,
        hour: newElement.hour,
        place: newElement.place,
        pub1 : newElement.pub1,
        pub2: newElement.pub2
      });
      console.log("Document written with ID: ", docRef.id);
    }
      guardarDatos();
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   
  };
  
    
  const removeEvent = (id) => {
    let newArray = events.filter((ev) => ev.id !== id);
    setEvents(newArray);
    const borrarDatos = async () =>{
     await deleteDoc(doc(db, "events", id));
    }
    borrarDatos();
    
  };

  return (
    <>
      <Dialog
        maxWidth="md"
        fullWidth
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography align="center">Arreglos</Typography>
        </DialogTitle>
        { 
        events.map((event, i) => {
          return (
            <DialogContent key={"event_list_" + i}>
              <DialogContentText id="alert-dialog-description">
                <MenuItem>
                  <ListItemIcon>
                    <GroupIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText key={"info1_" + i}>
                    {event.pub1 + " y"} {event.pub2}
                  </ListItemText>
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
                  <ListItemText key={"info3_" + i}>{event.hour}</ListItemText>
                </MenuItem>
                
                <IconButton aria-label="delete" color="primary" onClick={ () =>{removeEvent(event.id)}}>
                  <DeleteIcon />
                </IconButton>
                
              </DialogContentText>
            </DialogContent>
          );
        })}

        <DialogActions>
          <IconButton onClick={handleClickOpen}>
            <AddIcon />
          </IconButton>
          <Button onClick={close} autoFocus>
            Close
          </Button>
        </DialogActions>
        <SweetAlert2 {...swalProps} />
      </Dialog>
      {openDialog ? (
        <DialogEvent
          date={date}
          open={openDialog ? openDialog : false}
          close={handleClose}
          addEvent={addEvent}
          events = {events}
          setEvents = {setEvents}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default DialogEventList;
