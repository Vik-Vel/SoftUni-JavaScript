function tradeCommissions(input) {
  let city = input[0];
  let capacity = Number(input[1]);
  let commission = 0;
  switch (city) {
    case "Sofia":
      if (capacity >= 0 && capacity <= 500) {
        commission = 0.05;
      } else if (capacity > 500 && capacity <= 1000) {
        commission = 0.07;
      } else if (capacity > 1000 && capacity <= 10000) {
        commission = 0.08;
      } else if (capacity > 10000) {
        commission = 0.12;
      } else {
        console.log("error");
      }
      if(capacity >= 0){
        console.log((capacity * commission).toFixed(2));
    }
      break;
    case "Varna":
      if (capacity >= 0 && capacity <= 500) {
        commission = 0.045;
      } else if (capacity > 500 && capacity <= 1000) {
        commission = 0.075;
      } else if (capacity > 1000 && capacity <= 10000) {
        commission = 0.1;
      } else if (capacity > 10000) {
        commission = 0.13;
      } else {
        console.log("error");
      }
      if(capacity >= 0){
        console.log((capacity * commission).toFixed(2));
    }
      break;
    case "Plovdiv":
      if (capacity >= 0 && capacity <= 500) {
        commission = 0.055;
      } else if (capacity > 500 && capacity <= 1000) {
        commission = 0.08;
      } else if (capacity > 1000 && capacity <= 10000) {
        commission = 0.12;
      } else if (capacity > 10000) {
        commission = 0.145;
      } else {
        console.log("error");
      }
      if(capacity >= 0){
          console.log((capacity * commission).toFixed(2));
      }
      break;
    default:
      console.log("error");
      break;
  }
  
}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);

tradeCommissions(["Varna", "3874.50"]);

tradeCommissions(["Kaspichan", "-20"]);
