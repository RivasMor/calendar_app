
import { useEffect, useState } from "react";
import Month from "./Month";
import {Button,Grid} from '@mui/material';
import { createData, nameMonth, getNextMonth, getPrevMonth} from "../utils/calendarUtils";
import DialogPublishers from "./DialogPublishers";
import DialogPlaces from "./DialogPlaces";
import MyDialog from "./MyDialog";

const CalendarContainer = () => {
  const [nameDays, setnameDays] = useState([]);
  const [month, setMonth] = useState([]);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());     
  const [openDialogPublishers, setOpenDialogPublishers] = useState(false);
  const [openDialogPlaces, setOpenDialogPlaces] = useState(false);
  const [openMyDialog,setOpenMyDialog] = useState(false);
  const handleClickOpenMyDialog = () =>{
    setOpenMyDialog(true)
  }
  const handleCloseMyDialog = () =>{
    setOpenMyDialog(false)
  } 
  const handleClickOpen = () => {
    setOpenDialogPublishers(true);
  };
  const handleClose = () => {
    setOpenDialogPublishers(false);
  };
  const handleClickOpenDialogPlaces = () =>{
    setOpenDialogPlaces(true);
  }
  const handleCloseDialogPlaces = () => {
    setOpenDialogPlaces(false);
  };
  //Cargo los datos
  useEffect(() => {
    let m = date.getMonth();    
    setMonth(nameMonth(m));
    setnameDays(["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]);
    setData(createData(date));
    

  }, []);
  const handleNextMonth = () =>{
    setMonth(nameMonth(getNextMonth(date).getMonth()));
    setData(createData(getNextMonth(date)));
    setDate(getNextMonth(date));  
    
    console.log(date)
    
    
  }
  const handlePrevMonth = () =>{
    setMonth(nameMonth(getPrevMonth(date).getMonth()));
    setData(createData(getPrevMonth(date)));
    setDate(getPrevMonth(date));
    
  }

  return (
    <>     
        
        <Month month={month} nameDays={nameDays} data={data} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} />
         
          <Grid container 
         sx={{
          marginTop: '2%',
          
        }} >           
        <Grid item md={2} xs={12}><Button  onClick={handleClickOpen}  sx={{background:'#00B0F6',width:'80%',color:'white',marginTop:'2%', }}>PUBLICADORES</Button></Grid>
        <Grid item md={2} xs={12}><Button  onClick={handleClickOpenDialogPlaces} sx={{background:'#00B0F6',width:'80%',color:'white',marginTop:'2%'}}>LUGARES</Button></Grid>
        <Grid item md={2} xs={12}><Button onClick={handleClickOpenMyDialog}   sx={{background:'#00B0F6',width:'80%',color:'white',marginTop:'2%'}}>HORARIOS</Button></Grid>
        <Grid item md={2} xs={12}></Grid>
        <Grid item md={2} xs={12}></Grid>
        <Grid item md={2} xs={12}></Grid>                         
          </Grid>

        
        
      {openDialogPublishers ? (
        <DialogPublishers
          open={openDialogPublishers ? openDialogPublishers : false}
          close={handleClose}
        />
      ) : (
        <> </>
      )}{" "}
      {openDialogPlaces ? (
        <DialogPlaces open={openDialogPlaces ? openDialogPlaces: false}
        close={handleCloseDialogPlaces} />
        ): (<> </>)}
      {
        openMyDialog ? (<MyDialog open={openMyDialog ? openMyDialog: false}
          close={handleCloseMyDialog} title='Horarios'/>) : (<> </>)
      }
    </>
  );
};
export default CalendarContainer;
