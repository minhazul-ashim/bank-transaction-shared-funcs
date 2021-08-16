// Initialize the whole function;

init();

// Shared function to get input amount

function getAmount(inputID) {

    const input = document.getElementById(inputID);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);

    input.value = null;

    return inputAmount;
}

//Shared function to update the corresponding UI

function setUIText(textID, addAmount) {

    const targetText = document.getElementById(textID);
    const targetInnerAmount = parseFloat(targetText.innerText);
    const updatedAddition = targetInnerAmount + addAmount;
    targetText.innerText = updatedAddition;

}

//Shared function to update the balance;

function updateBalance(amount, addition) {

    const balanceID = document.getElementById('balance-text');
    const currentBalance = parseFloat(balanceID.innerText);

    let updatedBalance;

    if (addition == true) {
        updatedBalance = currentBalance + amount;
    } else {
        updatedBalance = currentBalance - amount;
    }

    balanceID.innerText = updatedBalance;
}

//Function for getting only the balance for withdrawal validation;

function getBalance() {

    const balanceID = document.getElementById('balance-text');
    const currentBalance = parseFloat(balanceID.innerText);

    return currentBalance;
}


// Event handling of deposit button;

function init() {
    document.getElementById('deposit-btn').addEventListener('click', function () {

        //Get the deposit amount from inputField;

        const depositAmount = getAmount('deposit-input');

        //Condition for validation

        if (depositAmount > 0) {
            //Update & add deposit UI

            setUIText('deposit-text', depositAmount)

            //Update the balance UI

            updateBalance(depositAmount, true);

            //Complete transaction button and message appearing;

            document.getElementById('complete-transaction').style.display = 'block';
            document.getElementById('trnx-msg').style.display = 'none';
            document.getElementById('insufficient-msg').style.display = 'none';
        }

    })


    //Event handling of withdraw button;

    document.getElementById('withdraw-btn').addEventListener('click', function () {

        //Get the withdrawal amount from inputField;

        const withdrawAmount = getAmount('withdraw-input');

        // Condition for validation;

        if (withdrawAmount > 0 && withdrawAmount <= getBalance()) {

            //Update and add withdraw UI;

            setUIText('withdraw-text', withdrawAmount);

            //Update the balance UI;

            updateBalance(withdrawAmount, false);

            //Complete transaction button appearing;

            document.getElementById('complete-transaction').style.display = 'block';
            document.getElementById('trnx-msg').style.display = 'none';
            document.getElementById('insufficient-msg').style.display = 'none';

        } else if (withdrawAmount > getBalance()) {

            document.getElementById('complete-transaction').style.display = 'none';
            document.getElementById('trnx-msg').style.display = 'none';
            document.getElementById('insufficient-msg').style.display = 'block';
        }
    })
};


// Event handling for completing transaction;

document.getElementById('complete-transaction').addEventListener('click', function () {

    document.getElementById('deposit-text').innerText = 0;
    document.getElementById('withdraw-text').innerText = 0;
    document.getElementById('complete-transaction').style.display = 'none';
    document.getElementById('trnx-msg').style.display = 'block';

})
