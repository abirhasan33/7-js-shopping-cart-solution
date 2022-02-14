function updeteproductNumber (product, price, isIncresing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncresing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    } 
    productInput.value = productNumber;
    // updet  ToTal?
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate Total
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// phone increase decrese decrese event 
document.getElementById("phone-plus").addEventListener('click', function(){
    updeteproductNumber('phone', 1219, true);
});
document.getElementById("phone-minus").addEventListener('click', function(){
    updeteproductNumber('phone', 1219, false);
})
// handle case increase darectes event 
document.getElementById("case-plus").addEventListener('click', function(){
    updeteproductNumber('case', 59,  true);
});
document.getElementById("case-minus").addEventListener('click', function(){
    updeteproductNumber('case', 59, false)
});

document.getElementById("button").addEventListener('click', function(){
    updeteproductNumber()
})
