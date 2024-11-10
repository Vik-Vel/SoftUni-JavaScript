function catalogue(input) {
  let catalogues = [];
  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' : ');

    let product = {
        name: tokens[0],
        price: Number(tokens[1])
    };
    //product[tokens[0]] = Number(tokens[1]);
    
    catalogues.push(product);
  }
    let initialPrinted = [];
    let sorted = Object.keys(catalogues).sort((a, b) => a.localeCompare(b));

    for(let productObj of sorted){
        let initial = productObj.name[0];

        if(!initialPrinted.includes(initial)){
            console.log(initial);
            initialPrinted.push(initial);
        }
        console.log(`${productObj.name} : ${productObj.price}`);
    }
  }


catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
