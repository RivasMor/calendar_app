import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Month from "./Month";
import { createDaysArray } from "../utils/calendarUtils";

const CalendarContainer = () => {
  const [nameDays, setnameDays] = useState([]);
  const [month, setMonth] = useState({});
  const [data, setData] = useState([]);
  //Cargo los datos
  useEffect(() => {
    setMonth({ value: "AGOSTO" });
    setnameDays(["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]);
    setData(createDaysArray());
  }, []);

  return (
    <>
      
        
        <Month month={month} nameDays={nameDays} data={data} />
        
      
    </>
  );
};
export default CalendarContainer;
