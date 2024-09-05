function smallShop(input) {
  let product = input[0];
  let town = input[1];
  let quantity = Number(input[2]);

  let finalPrice = 0;

  switch (town) {
    case "Sofia":
      switch (product) {
        case "coffee":
          finalPrice = 0.5 * quantity;
          break;
        case "water":
          finalPrice = 0.8 * quantity;
          break;
        case "beer":
          finalPrice = 1.2 * quantity;
          break;
        case "sweets":
          finalPrice = 1.45 * quantity;
          break;
        case "peanuts":
          finalPrice = 1.6 * quantity;
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          finalPrice = 0.4 * quantity;
          break;
        case "water":
          finalPrice = 0.7 * quantity;
          break;
        case "beer":
          finalPrice = 1.15 * quantity;
          break;
        case "sweets":
          finalPrice = 1.3 * quantity;
          break;
        case "peanuts":
          finalPrice = 1.5 * quantity;
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          finalPrice = 0.45 * quantity;
          break;
        case "water":
          finalPrice = 0.7 * quantity;
          break;
        case "beer":
          finalPrice = 1.1 * quantity;
          break;
        case "sweets":
          finalPrice = 1.35 * quantity;
          break;
        case "peanuts":
          finalPrice = 1.55 * quantity;
          break;
      }
      break;
  }

  console.log(finalPrice);
}
smallShop(["coffee",
    "Varna",
    "2"])
    
smallShop(["peanuts",
    "Plovdiv",
    "1"])
    
smallShop(["beer",
    "Sofia",
    "6"])
    
smallShop(["water",
    "Plovdiv",
    "3"])
smallShop (["sweets",
    "Sofia",
    "2.23"])