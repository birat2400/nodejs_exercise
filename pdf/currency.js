// Write a nodejs application to convert the currency from one currency 
// to another using package: currency-converter-lt

const CC = require('currency-converter-lt');

let currencyConverter = new CC()
currencyConverter
.from("USD")
.to("NPR")
.amount(100)
.convert()
.then((response) => {
    console.log(response) 
})
