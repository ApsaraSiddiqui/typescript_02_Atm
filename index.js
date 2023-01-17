import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remain = balance - EnteredAmount;
        console.log(" Remaining balance :", remain);
    }
    else {
        console.log("Insuficient Balance");
    }
}