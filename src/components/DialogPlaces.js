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
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import db from "../Firebase/firebaseConfig";
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SweetAlert2 from "react-sweetalert2";
import DialogAddPlaces from './DialogAddPlaces';

const DialogPlaces = ({open,close}) =>{ 
  const [places, setPlaces] = useState([]);
  const [swalProps, setSwalProps] = useState({});
  const [openAddPlaces,setOpenAddPlaces] = useState(false);
  const handleClickOpen = () =>{
    setOpenAddPlaces(true);
  }
  const handleClose = () =>{
    setOpenAddPlaces(false);
  }
  
  const removePlace = (id) =>{
    let newArray = places.filter((pl) => pl.id !== id);
    setPlaces(newArray);
    const borrarDatos = async () =>{
     await deleteDoc(doc(db, "places", id));
    }
    borrarDatos();
  }
  const addPlace = (newElement) => {
    setPlaces([...places, newElement]);
    places.forEach((pub) => {
      console.log(pub);
    });
    setOpenAddPlaces(false);
    setSwalProps({
      show: true,
      text: "Dato Agregado",
      icon: "success",
    });
    
    try {
      const guardarDatos = async () =>{
      const docRef = await addDoc(collection(db, "places"), {
        name: newElement.name
      });
      console.log("Document written with ID: ", docRef.id);
    }
      guardarDatos();
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   
  };  
 
    useEffect(() => {
      const obtenerDatos = async () => {
        const datos = await getDocs(collection(db, "places"));
  
        let dataFromFirestone = datos.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
  
        setPlaces(dataFromFirestone);
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
          <Typography align="center">Lugares</Typography>
        </DialogTitle>
        {
            
            places.map((place,i) =>{
                return(      
              
                <MenuItem align='center'>
                  <ListItemIcon >
                    <LocationOnIcon  fontSize="small" />
                  </ListItemIcon>
                  <ListItemText key={"info1_" + i}>
                    {place.name}
                  </ListItemText>                  
                  <IconButton onClick={ () =>{removePlace(place.id)}}>
                    <DeleteIcon  fontSize="small" />
                  </IconButton>
                </MenuItem>               
              
            
                )
            })
        }
       
        <DialogActions>
          <IconButton onClick = {handleClickOpen}  sx={{backgroundColor: '#95E924', color:'black'}}>
            <AddIcon />
          </IconButton>
          <Button sx={{backgroundColor: '#95E924', color:'black'}} onClick={close} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
        <SweetAlert2 {...swalProps} />
      </Dialog>
     {
      openAddPlaces ? (<DialogAddPlaces open={openAddPlaces ? openAddPlaces : false} close={handleClose} addPlace={addPlace}/>) : <></>
     }
    </>
    )
}
export default DialogPlaces;