function leapYears(year){
    if((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

leapYears(1984)
leapYears(2003)
leapYears(4)