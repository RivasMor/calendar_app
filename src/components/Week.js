import { Grid, Box, Typography } from "@mui/material";
import Day from "./Day";
const Week = ({addEvent,data }) => {
 
  return (
    <>
    <Grid container  sx={{
          
          justifyContent:'center',
          alignContent:'center'
        }} >
      
     
      {
        data.map((day,key) => {
           return day.value === -1 ? <Grid item  xs>
          <Box sx={{ height: 100, border: "1px solid gray" }}><Typography></Typography></Box>
          </Grid> :
          <Day data={day} addEvent = {addEvent}/>
          
        })
      }
      
      
    </Grid>

     
      </>
  );
};
export default Week;