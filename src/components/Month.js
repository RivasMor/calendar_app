import { Grid,Typography } from "@mui/material";
import Week from "./Week";
const Month = ({month,nameDays,data,addEvent}) => {
  return (
    <>
      <Grid item  md={12} xs={12} sx={{ border: 1 }} >
        <Typography align='center' >{month.value}</Typography>
      </Grid>
      
      <Week nameDays={nameDays} data={data}  addEvent={addEvent}/>
      
      
    </>
  );
};
export default Month;
