import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import DialogEventList from "./DialogEventList";
import db from "../Firebase/firebaseConfig";

const Day = ({ data, addEvent }) => {
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "events"));

      let dataFromFirestone = datos.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setEvent(dataFromFirestone.filter((dato) => dato.date === data.date));
    };
    obtenerDatos();
  };
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "events"));
      let dataFromFirestone = datos.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setEvent(dataFromFirestone.filter((dato) => dato.date === data.date));
    };
    obtenerDatos();
  }, [data]);
  const currentDay = () => {
    let date = new Date();
    let today = date.getDate();
    return today;
  };

  return (
    <>
      <Grid item xs>
        <Box
          onClick={handleClickOpen}
          sx={{
            height: 100,
            border: "1px solid grey",
          }}
        >
          {currentDay() === data.value ? (
            <IconButton
              sx={{
                background: "#18FFFF",
                color: "black",
              }}
            >
              <Typography> {data.value} </Typography>{" "}
            </IconButton>
          ) : (
            <Typography> {data.value} </Typography>
          )}
          {event.map((e) => {
            return (
              <Typography
                gutterBottom
                fontSize={{
                  lg: 15,
                  md: 15,
                  sm: 10,
                  xs: 7,
                }}
                align="center"
                variant="body2"
                sx={{
                  marginLeft:'8%',
                  align:'center',
                  width:'80%',
                  backgroundColor: e.color,
                  borderRadius: "5%",
                }}
              >
                {" "}
                {e.pub1} | {e.pub2}{" "}
              </Typography>
            );
          })}{" "}
        </Box>{" "}
      </Grid>
      {open ? (
        <DialogEventList
          date={data.date}
          open={open ? open : false}
          close={handleClose}
          addEvent={addEvent}
        />
      ) : (
        <> </>
      )}{" "}
    </>
  );
};
export default Day;
