function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = "";
  let vacation = "";
  let sum = 0;

  if (budget <= 100) {
    destination = "Bulgaria";

    if (season === "summer") {
      vacation = "Camp";
      sum = budget * 0.3;
    } else if (season === "winter") {
      vacation = "Hotel";
      sum = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";

    if (season === "summer") {
      vacation = "Camp";
      sum = budget * 0.4;
    } else if (season === "winter") {
      vacation = "Hotel";
      sum = budget * 0.8;
    }
  } else if (budget >= 1000) {
    destination = "Europe";
    vacation = "Hotel";
    sum = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacation} - ${sum.toFixed(2)}`);
}

journey(["50", "summer"]);

journey(["75", "winter"]);

journey(["312", "summer"]);

journey(["678.53", "winter"]);

journey(["1500", "summer"]);
