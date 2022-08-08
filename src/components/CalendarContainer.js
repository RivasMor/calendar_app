import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Month from "./Month";
import {createDaysArray} from '../utils/calendarUtils';

const CalendarContainer = () =>{
    const [nameDays, setnameDays] = useState([]);
    const [month, setMonth] = useState({});
    const [data,setData] = useState([]);
    //Cargo los datos 
    useEffect (() =>{
        setMonth({value: 'Agosto'});
        setnameDays(['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']);
        setData(createDaysArray());
        
    },[]);
    
    
    return (
<>
<Grid container  
  direction="row"
  alignItems="center" sx={{ border: 1 }}>
    <Month month={month} nameDays={nameDays} data={data} />
</Grid>
</>
    )
}
export default CalendarContainer;