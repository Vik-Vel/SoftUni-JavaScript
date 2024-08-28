function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  if (minutes + 15 >= 60) {
    hours++;
    minutes += 15;
    minutes -= 60;
  }
  else{
    minutes+=15;
  }
  if (hours >= 24) {
    hours -= 24;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}

time(["0", "01"])
