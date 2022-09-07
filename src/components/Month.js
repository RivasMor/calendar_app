import { Box, Grid, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Week from "./Week";
const Month = ({ month, nameDays, data, addEvent, handleNextMonth, handlePrevMonth }) => {

  
  return (
    <>
    
      <Grid container
        sx={{
          border: 1,
          height: "10vh",
          backgroundColor: "#581845",
          justifyContent: 'space-between',
          alignContent:'center'
        }}
      >
        
        <NavigateBeforeIcon onClick={handlePrevMonth} fontSize="large" sx={{color:'white'}}/>
       
        <Typography variant="h6" color="white">
          {month}
        </Typography>
       < NavigateNextIcon onClick = {handleNextMonth} fontSize="large" sx={{color:'white'}}/>
      </Grid>
      
      
        {nameDays.map((day, key) => (
          
          <Grid  item xs key={"name_day_" + key} sx={{flexGrow:1, backgroundColor:'#581845'}}>
            <Box sx={{ height: 50, border: "1px solid grey"}}> <Typography align="center"  sx={{color:'white', marginTop:'4%'}}>{day}</Typography></Box>
          </Grid>
            
        ))
        }
       
      {
        data.map((el, key)=>
        
        <Week nameDays={nameDays} data={el} addEvent={addEvent} />
        )
      }
      
      
      
     
      
     
    </>
  );
};
export default Month;
