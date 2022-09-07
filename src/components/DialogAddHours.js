import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";
const DialogAddHours = ({open,close}) =>{
    return(
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
         <DatePicker/>
            
          </DialogContent>
  
          <DialogActions>
            <Button  sx={{ backgroundColor: "#95E924", color: "black" }} autoFocus>
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
    )
}
export default DialogAddHours;