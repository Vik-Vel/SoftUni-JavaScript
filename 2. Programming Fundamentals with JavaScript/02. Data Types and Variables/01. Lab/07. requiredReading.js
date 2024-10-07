function requiredReading(numberOfPagesCurrentBook, pagesReadInHour, numOfDays){
    let timeForReadingAll = numberOfPagesCurrentBook / pagesReadInHour;
    let timeForTheDay = timeForReadingAll / numOfDays;
    console.log(timeForTheDay)
}

requiredReading(212, 20, 2)
requiredReading(432, 15, 4)
