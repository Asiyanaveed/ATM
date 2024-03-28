#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2110;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "list",
                choices: ["2000", "4000", "6000", "8000"]
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is:${myBalance}`);
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`your balance is:  ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
