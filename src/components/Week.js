import { Grid, Box, Typography } from "@mui/material";
import Day from "./Day";
const Week = ({ nameDays,data,addEvent }) => {
  return (
    <>
      {nameDays.map((day, key) => (
        <Grid item container>
        <Grid  item xs={1.7} md={1.7} key={"name_day_" + key} sx={{backgroundColor:'#581845'}}>
          <Box sx={{ height: 50, border: "1px dashed grey"}}> <Typography align="center"  sx={{color:'white', marginTop:'4%'}}>{day}</Typography></Box>
        </Grid>
        </Grid>
      ))
      }
    </>
  );
};
export default Week;