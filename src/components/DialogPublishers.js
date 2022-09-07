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
import DeleteIcon from "@mui/icons-material/Delete";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import db from "../Firebase/firebaseConfig";
import DialogAddPublisher from "./DialogAddPublisher";
import SweetAlert2 from "react-sweetalert2";

const DialogPublishers = ({ open, close }) => {
  const [publishers, setPublishers] = useState([]);
  const [openDialogAddPublishers, setOpenDialogAddPublishers] = useState(false);
  const [swalProps, setSwalProps] = useState({});

  const handleClickOpen = () => {
    setOpenDialogAddPublishers(true);
  };
  const handleClose = () => {
    setOpenDialogAddPublishers(false);
  };

  //Functions
  const strAscending = [...publishers].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );
  
 
  const addPublisher = (newElement) => {
    {
      console.log(newElement);
      let found = publishers.find((pub) => pub.name === newElement.name);
      console.log(found);
      if (found) {
        setSwalProps({
          show: true,
          text: "Ya existe ese publicador",
          icon: "error",
        });
      } else {
        setPublishers([...publishers, newElement]);

        setOpenDialogAddPublishers(false);
        setSwalProps({
          show: true,
          text: "Dato Agregado",
          icon: "success",
        });
        try {
          const guardarDatos = async () => {
            const docRef = await addDoc(collection(db, "publishers"), {
              name: newElement.name,
            });
            console.log("Document written with ID: ", docRef.id);
          };
          guardarDatos();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  };

  const removePublisher = (id) => {
    let newArray = publishers.filter((pub) => pub.id !== id);
    setPublishers(newArray);
    const borrarDatos = async () => {
      await deleteDoc(doc(db, "publishers", id));
    };
    borrarDatos();
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "publishers"));

      let dataFromFirestone = datos.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      
      setPublishers(dataFromFirestone);
    };
    obtenerDatos();
  }, []);
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
          <Typography align="center">Publicadores Disponibles</Typography>
        </DialogTitle>
        {strAscending.map((publisher, i) => {
          return (
            <MenuItem align="center">
              <ListItemIcon>
                <PersonPinIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText key={"info1_" + i}>{publisher.name}</ListItemText>
              <IconButton
                onClick={() => {
                  removePublisher(publisher.id);
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </MenuItem>
          );
        })}

        <DialogActions>
          <IconButton
            onClick={handleClickOpen}
            sx={{ backgroundColor: "#95E924", color: "black" }}
          >
            <AddIcon />
          </IconButton>
          <Button
            sx={{ backgroundColor: "#95E924", color: "black" }}
            onClick={close}
            autoFocus
          >
            Cerrar
          </Button>
        </DialogActions>
        <SweetAlert2 {...swalProps} />
      </Dialog>
      {openDialogAddPublishers ? (
        <DialogAddPublisher
          open={openDialogAddPublishers ? openDialogAddPublishers : false}
          close={handleClose}
          addPublisher={addPublisher}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default DialogPublishers;
