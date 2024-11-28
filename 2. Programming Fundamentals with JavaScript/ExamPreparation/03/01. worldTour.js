function worldTour(input){
    let route = input.shift();

    let tokens = input.shift().split(":");
    while(tokens[0] !== 'Travel'){
        let command = tokens[0];

        if(command === 'Add Stop'){
        let index =  Number(tokens[1]);
            if(index >= 0 &&index <= route.length){
                let city = tokens[2];
               
                route = route.slice(0, index) + city + route.slice(index);   //works only for arrays, not for strings
               
            }
        }
        else if(command === 'Remove Stop'){
        let index =  Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if(index >= 0 && index < route.length && endIndex < route.length && endIndex >= index){
                route = route.split("");
                route.splice(index,endIndex-index+1);
                route = route.join("");
                

            }
        }
        else if(command === 'Switch'){
            let oldString = tokens[1];
            let newString = tokens[2];
           
            route = route.replace(new RegExp(oldString, 'g'), newString);
        }

        console.log(route);

        tokens = input.shift().split(":");
    }

    console.log(`Ready for world tour! Planned stops: ${route}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]
    )