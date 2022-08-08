import { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import DialogEventList from "./DialogEventList";

const Day = ({ data,addEvent }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item md={1.7} xs={1.5}>
        <Box
          onClick={handleClickOpen}
          sx={{ height: 50, border: "1px dashed grey" }}
        >
          <Typography> {data.value} </Typography>
        </Box>
      </Grid>
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
