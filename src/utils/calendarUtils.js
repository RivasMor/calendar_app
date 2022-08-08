export const createDaysArray = () =>{
    let array = [];
    let i;
    for(i=1;i<32;i++){
        array.push({value:i, date: '2022-08-'+ i})
        
    }
    return array;
}
