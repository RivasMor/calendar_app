export const createDaysArray = () =>{
    let array = [];
    let i = 1;
    for(i;i<=7;i++){
        array.push({value:i, date: '2022-08-'+ i})
        
    }
    return array;
}
export const nameMonth = (i) =>{
  //console.log(i)
  const months = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  return months[i];
}

export  const createData = (date) => {

    date = date ? date : new Date();
    const currentYear = date.getFullYear(); //Año de date
    const currentMonth = date.getMonth(); //Mes de date
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth + 1); //Cantidad de dias
    const firstDayCurrentMonth = getFirstDayOfMonth(date.getFullYear(),date.getMonth()); //Primer dia del mes 
    const dayOfWeekDigit = (firstDayCurrentMonth.getDay() - 1) < 0 ? 6 : (firstDayCurrentMonth.getDay() - 1); //Porque tomamos a partir de lunes
    
 
    
    let dataReturn = [];
    let currentArray = [];
    let firstWeek = true;
    let dayNumber = 1;
    for(let i = 0 ; i<= daysInCurrentMonth ; ){

      for(let j = 0 ; j < 7 ; j++){
        if(firstWeek){ //trato especial para la primer semana solamente, dependiendo donde arranque el dia
          if(i >= dayOfWeekDigit){
            currentArray.push({value: dayNumber, date: getDate(currentYear,currentMonth,dayNumber).toLocaleDateString("es-AR")});
            dayNumber += 1;
          }
          else{
            currentArray.push({value: -1});
          }
        }
        else{
          if(dayNumber <= daysInCurrentMonth){
            currentArray.push({value: dayNumber, date: getDate(currentYear,currentMonth,dayNumber).toLocaleDateString("es-AR")});
            dayNumber += 1;
          }else{
            currentArray.push({value: -1});
          }
        }        
        i += 1; 
      }
      firstWeek = false;
      dataReturn.push(currentArray);
      currentArray = [];
    }
	return dataReturn;
  }
  export const getDate = (year, month, day) =>{
    return new Date(year, month, day);
  }
  
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }


  export function getNextMonth(date) {
    return new Date(date.getFullYear(), date.getMonth()+1, 1);
  }
  export function getPrevMonth(date) {
    return new Date(date.getFullYear(), date.getMonth()-1, 1);
  }

 
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
