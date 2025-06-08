//The Function.
function estimateTransactionFee() {
//This part prompts the user to enter the amount of money they want to send.
    const input = prompt(`Unatuma Ngapi? (KES):`);
//amountToSend makes sure amount entered is a number    
    const amountToSend = Number(input);
//These are the variables I declared and I also show how to calculate the total amount.    
    const transactionFee = 1.5;
    let calculatedTransactionFee = amountToSend * (transactionFee / 100);
    const totalAmount = amountToSend + calculatedTransactionFee;
//The first if statement to make sure minimum transaction fee is 10.
    if (calculatedTransactionFee < 10) {
        let calculatedTransactionFee = 10;
        console.log(`
        Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${calculatedTransactionFee}
        Total amount to be debited: KES ${amountToSend + calculatedTransactionFee}

        Send Money Securely!
        `);
//The second statement to make sure maximum transaction fee is 70.        
    } else if (calculatedTransactionFee > 70) {
        let calculatedTransactionFee = 70;
        console.log(`
        Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${calculatedTransactionFee}
        Total amount to be debited: KES ${amountToSend + calculatedTransactionFee}

        Send Money Securely!
        `);
    }
//The return for the function.
        return amountToSend;
}
//This is where I invoke the function.
estimateTransactionFee();