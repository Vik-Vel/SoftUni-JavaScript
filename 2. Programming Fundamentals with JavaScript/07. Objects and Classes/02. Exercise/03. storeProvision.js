function storeProvision(firstArr, secondArr){
    let products = [];

    for (let i = 0; i < firstArr.length; i+=2) {
        if(i % 2 === 0){
            let name = firstArr[i];
            let qty = Number(firstArr[i+1]);

            if(!products[name]){
                products[name] =  0 ;
            }

            products[name] +=  qty ;
        }
    }
    for (let i = 0; i < secondArr.length; i+=2) {
        if(i % 2 === 0){
            let name = secondArr[i];
            let qty = Number(secondArr[i+1]);

            if(!products[name]){
                products[name] =  0 ;
            }

            products[name] +=  qty ;
        }
    }
    //for IN for objects
    for (let prod in products) {
        let key = products.prod;
        console.log(`${prod} -> ${products[prod]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )