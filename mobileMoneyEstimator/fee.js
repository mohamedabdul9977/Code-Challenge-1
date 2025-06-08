//The Function.
function estimateTransactionFee() {
    const input = prompt(`Unatuma Ngapi? (KES):`);
    const amountToSend = Number(input);
    const transactionFeePercent = 1.5;
    
// Calculate initial fee
    let calculatedTransactionFee = amountToSend * (transactionFeePercent / 100);
    
//The first if statement to make sure minimum transaction fee is 10.
    if (calculatedTransactionFee < 10) {
        calculatedTransactionFee = 10;
//The second statement to make sure maximum transaction fee is 70. 
    } else if (calculatedTransactionFee > 70) {
        calculatedTransactionFee = 70;
    }
    
    const totalAmount = amountToSend + calculatedTransactionFee;

    console.log(`
        Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${calculatedTransactionFee}
        Total amount to be debited: KES ${totalAmount}

        Send Money Securely!
    `);
//The return for the function.
    return amountToSend;
}
//This is where I invoke the function.
estimateTransactionFee();
