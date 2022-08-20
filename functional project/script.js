//sevarel variable 
const subTotal = document.getElementById('subtotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');


/*________________________MObile Total Calculation _____________________*/

document.getElementById('mbl-plus-btn').addEventListener('click', function () {
    const newMblNumber = getValue(true);
    totalPrice(newMblNumber);

    subTotal.innerText = totalCost();
    tax.innerText = taxCalculation();
    total.innerText = finalTotal();

});


document.getElementById('mbl-minus-btn').addEventListener('click', function () {
    const newMblNumber = getValue(false);
    totalPrice(newMblNumber);

    subTotal.innerText = totalCost();
    tax.innerText = taxCalculation();
    total.innerText = finalTotal();
});


/* _______________ Case Total Calculation _________________*/

document.getElementById('case-plus-btn').addEventListener('click', function () {
    const caseNumber = getCaseValue(true);
    totalCasePrice(caseNumber);

    subTotal.innerText = totalCost();
    tax.innerText = taxCalculation();
    total.innerText = finalTotal();
})


document.getElementById('case-minus-btn').addEventListener('click', function () {
    const caseNumber = getCaseValue(false);
    totalCasePrice(caseNumber);

    subTotal.innerText = totalCost();
    tax.innerText = taxCalculation();
    total.innerText = finalTotal();
})