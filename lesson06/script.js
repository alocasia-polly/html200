
let input = prompt('Hello! Please enter a command: \n - View Balance (B)\n - Withdraw (W)\n - Deposit (D)\n - Quit (Q)');

let amount = 0;
let balance = 25000;



function retakeInput() {
    input = prompt('Please enter a command: \n - View Balance (B)\n - Withdraw (W)\n - Deposit (D)\n - Quit (Q)');
}



function viewBalance() {
    alert('Your current balance is: \n$' + balance);
}



function withdrawAmount() {

    amount = Number(prompt('Enter the amount you’d like to withdraw: '));

    if ((balance - amount) < 0) {

        while (balance - amount < 0) {
            alert('You cannot withdraw more than your balance. Your current balance is $' + balance + '.');
            amount = Number(prompt('Please enter a valid amount to withdraw: '));
        }
    } 
    
    else if (balance - amount < 300) {

        let confirmation = prompt('This will lower your balance below $300. Would you like to withdraw ' + amount + '? \n - Yes (Y) \n - No (N)');

        if (confirmation == 'Y') {

            balance = balance - amount;
            alert('$' + amount + ' withdrawn. Your new balance is:\n $' + balance);

            return;
        } 
        
        else if (confirmation == 'N') {
            return;
        }
    } 
    
    balance = balance - amount;
    alert('$' + amount + ' withdrawn. Your new balance is:\n $' + balance);
}




function depositAmount() {

    amount = Number(prompt('Enter the amount you’d like to deposit: '));

    if ((balance + amount) > 50000) {

        while (balance + amount > 50000) {
            alert('Your balance cannot be above $50,000. Your current balance is $' + balance + '.');
            amount = Number(prompt('Please enter a smaller amount to deposit: '));
        }
    } 
    
    balance = balance + amount;
    alert('$' + amount + ' deposited. Your new balance is:\n $' + balance);
}





while (input !== 'Q')  {

    switch (input) {
        case 'B': {
            viewBalance();
            break;
        }
        case 'W': {
            withdrawAmount();
            break;
        }
        case 'D': {
            depositAmount();
            break;
        }
        default: {
            alert('Invalid input, please enter one of the following commands: \n - View Balance (B)\n - Withdraw (W)\n - Deposit (D)\n - Quit (Q)');
        }
    }
    retakeInput();
}




