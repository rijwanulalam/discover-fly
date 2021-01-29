
// Function for First Class

document.getElementById('first-class-increase').addEventListener('click', function(){

    sitCountChange(true, 'firstClass');
})

document.getElementById('first-class-decrease').addEventListener('click', function(){

    sitCountChange(false, 'firstClass');
})

// Function  for Economy Class

document.getElementById('economy-increase').addEventListener('click', function(){

    sitCountChange(true, 'economy');
})

document.getElementById('economy-decrease').addEventListener('click', function(){

    sitCountChange(false, 'economy');
})


function sitCountChange(isIncrease, getSit){

    const currentSit = document.getElementById(getSit + '-sit');
    const currentSitCount = parseInt(currentSit.value);
    let newSitCount = currentSitCount;
    if(isIncrease == true){
        newSitCount = currentSitCount + 1;
    }
    else if(isIncrease == false && currentSitCount > 0){
        newSitCount = currentSitCount - 1;
    }
    currentSit.value = newSitCount;
    calculateTotal();
}

// Calculate Grand Total

function calculateTotal(){

    const firstClassSitInput = document.getElementById('firstClass-sit');
    const firstClassSitCount = parseInt(firstClassSitInput.value);

    const economySitCountInput = document.getElementById('economy-sit');
    const economySitCount = parseInt(economySitCountInput.value);
    // Display Total Price
    const totalPrice = firstClassSitCount * 150 + economySitCount * 100;
    document.getElementById('total-price').innerText = totalPrice;
    // Display Vat Amount
    const vatAmount = totalPrice * 0.1;
    document.getElementById('vat-amount').innerText = vatAmount;
    // Display Grand Total
    const grandTotal = totalPrice + vatAmount;
    document.getElementById('grand-total').innerText = grandTotal;

    // Display Confirmation message 
    document.getElementById('book-btn').addEventListener('click', function(){
        document.getElementById('welcome-area').style.display = 'none';
        document.getElementById('display-total').style.display = 'block';
        document.getElementById('totalAmount').innerHTML = grandTotal + '.';
        document.getElementById('first-class-sit-count').innerHTML = firstClassSitCount;
        document.getElementById('economy-sit-count').innerHTML = economySitCount;
    })

}