import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Box,
  TextField
} from "@mui/material";
import { useState } from "react";

const DialogEvent = ({ open, close, date, addEvent }) => {
  
  
    //Hooks all Select 
  const [option_pub1, setOption_pub1] = useState();
  const changeOption_pub1 = (event) => {
    setOption_pub1(event.target.value);
  };
  const [option_pub2, setOption_pub2] = useState();
  const changeOption_pub2 = (event) => {
    setOption_pub2(event.target.value);
  };
    
  const [option_place, setOption_place] = useState();
  const changeOption_place = (event) => {
    setOption_place(event.target.value);
  };
  const [option_hour, setOption_hour] = useState();
  const changeOption_hour = (event) => {
    setOption_hour(event.target.value);
  };

  const places = ['   ','Terminal','Plaza']
  const hours = ['  ','10:00 - 11:30', '10:30 - 12:00','16:30 - 18:00', '17:00 - 18:30'];
  const publishers = [' ','Erika','Brian','Leo A.','Nelly']
  
  return (
    <>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography align="center">Agregar</Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "100", height: "100" }}>
          <DialogContentText id="alert-dialog-description">
          <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >                   
              <TextField
                id="selectPublisher1"
                select
                label="Publicador 1"
                value={option_pub1}
                onChange={changeOption_pub1}
                SelectProps={{
                  native: true,
                }}                
                variant="standard"
              >
                {publishers.map((option,i) => (
                  <option key={"pub_"+i} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>

              <TextField
                id="selectPublisher2"
                select
                label="Publicador 2"
                value={option_pub2}
                onChange={changeOption_pub2}
                SelectProps={{
                  native: true,
                }}                
                variant="standard"
              >
                {publishers.map((option,i) => (
                  <option key={'pub2_'+i} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              
            </Box>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >                   
              <TextField
                id="selectPlace"
                select
                label= "Lugar"
                value={option_place}
                onChange={changeOption_place}
                SelectProps={{
                  native: true,
                }}
                
                variant="standard"
              >
                {places.map((option,i) => (
                  <option key={"place_"+i} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >             
            <TextField
                id="selectHour"
                select
                label="Horario"
                value={option_hour}
                onChange={changeOption_hour}
                SelectProps={{
                  native: true,
                }}
                
                variant="standard"
              >
                {hours.map((option,i) => (
                  <option key={'hour'+i} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              </Box>

           
          </DialogContentText>
        </DialogContent>

        <DialogActions>
        <Button onClick={() => addEvent({place: option_place, pub1: option_pub1, pub2:option_pub2, hour:option_hour, date:date})} autoFocus >
            Agregar
          </Button>
          <Button onClick={close} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DialogEvent;
