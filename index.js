import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answere = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answere.from]; // exchange rate
let toAmount = currency[user_answere.to]; // exchange rate
let amount = user_answere.amount;
let baseAmount = amount / fromAmount; //USD based currency //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
