import { Box, Grid, Typography } from "@mui/material";
import Week from "./Week";
const Month = ({ month, nameDays, data, addEvent }) => {
  return (
    <>
    
      <Grid container
        sx={{
          border: 1,
          height: "10vh",
          backgroundColor: "#581845",
        }}
      >
        <Typography variant="h6" align="center" marginTop={"1%"} color="white">
          {month.value}
        </Typography>
      </Grid>
      
      <Grid container>
        {nameDays.map((day, key) => (
          <Grid  items key={"name_day_" + key} sx={{flexGrow:1, backgroundColor:'#581845'}}>
            <Box sx={{ height: 50, border: "1px dashed grey"}}> <Typography align="center"  sx={{color:'white', marginTop:'4%'}}>{day}</Typography></Box>
          </Grid>
        ))
        }
        </Grid>
        <Grid container>
        {nameDays.map((day, key) => (
          <Grid  items key={"name_day_" + key} sx={{flexGrow:1, backgroundColor:'#581845'}}>
            <Box sx={{ height: 50, border: "1px dashed grey"}}> <Typography align="center"  sx={{color:'white', marginTop:'4%'}}>{day}</Typography></Box>
          </Grid>
        ))
        }
        </Grid>
        <Grid container>
        {nameDays.map((day, key) => (
          <Grid  items key={"name_day_" + key} sx={{flexGrow:1, backgroundColor:'#581845'}}>
            <Box sx={{ height: 50, border: "1px dashed grey"}}> <Typography align="center"  sx={{color:'white', marginTop:'4%'}}>{day}</Typography></Box>
          </Grid>
        ))
        }
        </Grid>
        <Grid container>
        {nameDays.map((day, key) => (
          <Grid  items key={"name_day_" + key} sx={{flexGrow:1, backgroundColor:'#581845'}}>
            <Box sx={{ height: 50, border: "1px dashed grey"}}> <Typography align="center"  sx={{color:'white', marginTop:'4%'}}>{day}</Typography></Box>
          </Grid>
        ))
        }
        </Grid>
      {/*<Week nameDays={nameDays} data={data} addEvent={addEvent} /> */}
    </>
  );
};
export default Month;
