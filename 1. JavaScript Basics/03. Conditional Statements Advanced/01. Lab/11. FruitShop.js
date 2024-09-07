function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let totalPrice = 0;
  const fruitsWeekday = {
    banana: 2.5,
    apple: 1.2,
    orange: 0.85,
    grapefruit: 1.45,
    kiwi: 2.7,
    pineapple: 5.5,
    grapes: 3.85,
  };

  const fruitsWeekend = {
    banana: 2.7,
    apple: 1.25,
    orange: 0.9,
    grapefruit: 1.6,
    kiwi: 3.0,
    pineapple: 5.6,
    grapes: 4.2,
  };

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          totalPrice = fruitsWeekday.banana * count;
          break;
        case "apple":
          totalPrice = fruitsWeekday.apple * count;
          break;
        case "orange":
          totalPrice = fruitsWeekday.orange * count;
          break;
        case "grapefruit":
          totalPrice = fruitsWeekday.grapefruit * count;
          break;
        case "kiwi":
          totalPrice = fruitsWeekday.kiwi * count;
          break;
        case "pineapple":
          totalPrice = fruitsWeekday.pineapple * count;
          break;
        case "grapes":
          totalPrice = fruitsWeekday.grapes * count;
          break;
        default:
          console.log("error");
          return;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          totalPrice = fruitsWeekend.banana * count;
          break;
        case "apple":
          totalPrice = fruitsWeekend.apple * count;
          break;
        case "orange":
          totalPrice = fruitsWeekend.orange * count;
          break;
        case "grapefruit":
          totalPrice = fruitsWeekend.grapefruit * count;
          break;
        case "kiwi":
          totalPrice = fruitsWeekend.kiwi * count;
          break;
        case "pineapple":
          totalPrice = fruitsWeekend.pineapple * count;
          break;
        case "grapes":
          totalPrice = fruitsWeekend.grapes * count;
          break;
        default:
          console.log("error");
          return;
      }
      break;
      default:
        console.log("error");
        return;
  }
  console.log(totalPrice.toFixed(2));
}

// fruitShop(["apple", "Tuesday", "2"]);

// fruitShop(["orange", "Sunday", "3"]);

// fruitShop(["kiwi", "Monday", "2.5"]);

// fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
