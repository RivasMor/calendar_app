import { useState, useEffect } from "react";

import { collection, getDocs} from "firebase/firestore";
import { Grid, Box, Typography } from "@mui/material";
import DialogEventList from "./DialogEventList";
import db from "../Firebase/firebaseConfig";



const Day = ({ data,addEvent}) => {
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const obtenerDatos = async () =>{
      const datos = await getDocs(collection(db,'events')); 
      
      let dataFromFirestone = datos.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));  
      setEvent(dataFromFirestone.filter(dato => dato.date === data.date))
  
    }   
    obtenerDatos();
  };
  useEffect(() => {    
    const obtenerDatos = async () =>{
      const datos = await getDocs(collection(db,'events'));      
      
      let dataFromFirestone = datos.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      
      setEvent(dataFromFirestone.filter(dato => dato.date === data.date))
  
    }   
    obtenerDatos();
  }, []);


  return (
    <>
      <Grid item md={1.7} xs={1.5} sx={{ flexGrow: 2 }}>
        <Box
          onClick={handleClickOpen}
          sx={{ height: 90, border: "1px dashed grey" }}
        >
          <Typography> {data.value} </Typography>
          {
            event.map((e) => {
              return(
                <Typography align='center' variant="body2">{e.pub1} | {e.pub2}</Typography>
                  
                )
            })
          }
          
        </Box>
        
      </Grid>
      <Grid item sx={{ flexGrow: 1 }} ></Grid>
      {open ? 
        <DialogEventList
          date = {data.date}
          open={open ? open : false}
          close={handleClose}
          addEvent={addEvent}
        />
      : 
        <></>
      }
    </>
  );
};
export default Day;
