function dayOfWeek(dayAsNum){
    let days =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(dayAsNum <= 7 && dayAsNum >= 1){
        let day = days[dayAsNum-1];
        console.log(day);
    }
    else{
        console.log('Invalid day!');
    }
}

dayOfWeek(3);