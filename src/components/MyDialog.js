import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
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
import DialogAddHours from "./DialogAddHours";

const MyDialog = ({title,open,close}) =>{
    const [openDialogAddHour, setOpenDialogAddHour] = useState(false);
    const handleClickOpenDialogAddHour = () =>{
        setOpenDialogAddHour(true);
    }
    const handleCloseDialogAddHour = () =>{
        setOpenDialogAddHour(false);
    }
    return(
        <>
      <Dialog
        maxWidth="md"        
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography align="center">{title}</Typography>
        </DialogTitle>
        
        <DialogActions>
          <IconButton onClick={handleClickOpenDialogAddHour} sx={{ backgroundColor: "#95E924", color: "black" }}>
            <AddIcon />
          </IconButton>
          <Button sx={{ backgroundColor: "#95E924", color: "black" }} onClick={close} >
            Close
          </Button>
        </DialogActions>
        </Dialog>
        
        {openDialogAddHour ? (
            <DialogAddHours
              open={openDialogAddHour ? openDialogAddHour : false}
              close={handleCloseDialogAddHour}
            />
          ) : (
            <></>
          )}
          </>
    )
}
export default MyDialog;