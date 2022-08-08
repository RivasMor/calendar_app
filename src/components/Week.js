import { Grid, Box } from "@mui/material";
import Day from "./Day";
const Week = ({ nameDays,data,addEvent }) => {
  return (
    <>
      {nameDays.map((day, key) => (
        <Grid item md={1.7} xs={1.5} key={"name_day_" + key}>
          <Box sx={{ height: 50, border: "1px dashed grey" }}>{day}</Box>
        </Grid>
        
      ))
      }
      {data.map((day,key) =>
        
            <Day key={"day_"+key} data={day} addEvent={addEvent}/>
      )}
    </>
  );
};
export default Week;