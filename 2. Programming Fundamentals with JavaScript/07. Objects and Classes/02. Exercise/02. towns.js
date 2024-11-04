function towns(){
    for(let townInfoStr of arr){
        let [town, latitude, longitude]= townInfoStr.split(' | '); //In this way we will set whatever is at first index will be city, at second index will be latitude and at third will be longitude
        latitude = Number(latitude); //We say that the latitude will be a number
        longitude = Number(longitude); //We say that the longitude will be a number

        // let townInfoObj = {
        //    town,  // === town: town, when the name and the property are the same name
        //    latitude, // === latitude: latitude,
        //    longitude// === longitude: longitude
        // }

        let townInfoObj = {
        town: town, 
        latitude: latitude.toFixed(2),
        longitude: longitude.toFixed(2)
         }

        console.log(townInfoObj)
    }
}