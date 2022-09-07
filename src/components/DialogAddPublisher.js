import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
const DialogAddPublisher = ({ open, close, addPublisher }) => {
const refPublisher = useRef(null);
const newPub = () =>{
    addPublisher({name: refPublisher.current.value})
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
          <DialogContentText align="center">
            <Typography color='error'>Formato Sugerido - Ejemplo: Camila R.</Typography>
          </DialogContentText>
          <TextField
          inputRef = {refPublisher}
            autoFocus
            margin="dense"
            id="namePublisher"
            label="Publicador"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "#95E924", color: "black" }}
            onClick={newPub}
            autoFocus
          >
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
export default DialogAddPublisher;
