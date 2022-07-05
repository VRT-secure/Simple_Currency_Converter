input = require('sync-input');

function check_key_of_dict(dict, key_dict) {
    for (let [key, value] of dict)
        if (key === key_dict)
            return true
    return false
}

function input_currency(s){
    let currency = input(s).toUpperCase();
    if (!check_key_of_dict(currencies_dict, currency)) {
        console.log("Unknown currency")
        return false
    }
    return currency
}

function input_amount(s) {
    let amount = Number(input(s))
    if (isNaN(amount)) {
        console.log("The amount has to be a number")
        return false
    }

    if (amount < 1) {
        console.log("The amount can not be less than 1.")
        return false
    }
    return  amount
}

console.log("Welcome to Currency Converter!")
let currencies_dict = new Map();
currencies_dict.set("USD", 1).set("JPY", 113.5).set("EUR", 0.89).set("RUB", 74.36).set("GBP", 0.75)
for (let [key, value] of currencies_dict) console.log(`1 USD equals  ${value} ${key}`);

while (true) {
    console.log("What do you want to do?")
    console.log("1-Convert currencies 2-Exit program")
    let choice = Number(input())
    if (!(choice === 2 || choice === 1)) {
        console.log("Unknown input")
        continue
    } else if (choice === 2) {
        console.log("Have a nice day!")
        break
    }

    while (true) {
        console.log("What do you want to convert?")

        let currency_from = input_currency("From:")
        if (currency_from === false)
            continue

        let currency_to = input_currency("To:")
        if (currency_to === false)
            continue

        let amount = input_amount("Amount:")
        if (amount === false)
            continue

        let result = (amount / currencies_dict.get(currency_from) * currencies_dict.get(currency_to)).toFixed(4)
        console.log(`Result: ${amount} ${currency_from} equals ${result} ${currency_to}`)
        break
    }
}
