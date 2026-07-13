// ATM Banking System


let userPIN = "12345678";
let currentBalance =1000;

let selectedOperation;
let transactionAmount;


function validatePIN() {
    let enteredPIN = prompt("Enter your PIN:");

    if (enteredPIN === userPIN) {
        return true;
    } else {
        console.log("Error: Incorrect PIN.");
        return false;
    }
}



function withdrawMoney() {
    transactionAmount = Number(prompt("Enter amount to withdraw:"));

    if (transactionAmount <= 0) {
        console.log("Error: Withdrawal amount must be greater than zero.");
    } 
    else if (transactionAmount > currentBalance) {
        console.log("Error: Insufficient balance.");
    } 
    else {
        currentBalance -= transactionAmount;
        console.log(
            `Success: You withdrew $${transactionAmount}. Your new balance is $${currentBalance}.`
        );
    }
}



function depositMoney() {
    transactionAmount = Number(prompt("Enter amount to deposit:"));

    if (transactionAmount <= 0) {
        console.log("Error: Deposit amount must be greater than zero.");
    } 
    else {
        currentBalance += transactionAmount;
        console.log(
            `Success: You deposited $${transactionAmount}. Your new balance is $${currentBalance}.`
        );
    }
}



function checkBalance() {
    console.log(`Your current balance is $${currentBalance}.`);
}



function changePIN() {
    let newPIN = prompt("Enter your new PIN:");

    if (/^\d{4}$/.test(newPIN)) {
        userPIN = newPIN;
        console.log("Success: Your PIN has been changed.");
    } 
    else {
        console.log("Error: PIN must contain exactly 4 digits.");
    }
}



if (validatePIN()) {

    do {
        selectedOperation = prompt(
            `Choose an operation:
            1. Withdraw Money
            2. Deposit Money
            3. Check Balance
            4. Change PIN
            5. Exit`
        );

        switch (selectedOperation) {

            case "1":
                withdrawMoney();
                break;

            case "2":
                depositMoney();
                break;

            case "3":
                checkBalance();
                break;

            case "4":
                changePIN();
                break;

            case "5":
                console.log("Thank you for using our ATM.");
                break;

            default:
                console.log("Error: Invalid operation.");
        }

    } while (selectedOperation !== "5");

}