function hotelRoom(input) {
  let month = input[0];
  let overnightStay = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  let discount = 0;

  switch (month) {
    case "May":
    case "October": {
    
      if (overnightStay > 7) {
        discount = 0.05;
      } 
      else if (overnightStay > 14) {
        discount = 0.3;
      }
      studioPrice = 50;
      apartmentPrice = 65;
    }
    break;
    case "June":
    case "September": {
      if (overnightStay > 7) {
        discount = 0.05;
      } 
      else if (overnightStay > 14) {
        discount = 0.3;
      }
      studioPrice = 50;
      apartmentPrice = 65;
    }
  }
}
