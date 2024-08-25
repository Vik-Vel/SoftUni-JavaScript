function suppliesForSchool(input) {
  let packOfPencils = 5.80;
  let packOfMarkers = 7.20;
  let boardPreparationForLiter = 1.20;

  let numPacksOfPencils = Number(input[0]);
  let numPacksOfMarkers = Number(input[1]);
  let litersBoardPreparation = Number(input[2]);
  let percentageDiscount = Number(input[3]) / 100;

  let totalWithoutDiscount = packOfPencils * numPacksOfPencils + packOfMarkers * numPacksOfMarkers + boardPreparationForLiter * litersBoardPreparation; 

  let totalWithDiscount = totalWithoutDiscount * (1 - percentageDiscount);

  console.log(totalWithDiscount);
}

suppliesForSchool(["4 ",
    "2 ",
    "5 ",
    "13 "]
    
    )
