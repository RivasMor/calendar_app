import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DialogAddPlaces = ({ open, close, addPlace }) => {
    const refPlace = useRef(null);
    const newPlace = () =>{
        addPlace({name: refPlace.current.value})
    }
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
        <DialogTitle align="center">Nuevo</DialogTitle>
        <DialogContent>
          
          <TextField
          inputRef = {refPlace}
            autoFocus
            margin="dense"
            id="namePlace"
            label="Lugar"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={newPlace} sx={{ backgroundColor: "#95E924", color: "black" }} autoFocus>
            Agregar
          </Button>
          <Button
            sx={{ backgroundColor: "#95E924", color: "black" }}
            onClick={close}
            autoFocus
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DialogAddPlaces;
