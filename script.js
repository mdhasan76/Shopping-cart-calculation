const subTotal = document.getElementById('subtotal');
const subTotalTax = document.getElementById('tax');
const finalTotal = document.getElementById('total');


/*_______________ Button Minus _________________*/


document.getElementById('mbl-minus-btn').addEventListener('click', function () {
    const inputPlus = document.getElementById('input-plus');
    const inputMinusNumber = parseInt(inputPlus.value);
    inputPlus.value = inputMinusNumber - 1;

    //total Mobile cost
    const mblTotal = document.getElementById('mbl-total');
    mblTotal.innerText = inputPlus.value * 1219;

    //SubTotal cost
    const storSubtotal = parseInt(mblTotal.innerText);
    const caseTotal = document.getElementById('case-total');
    const casetotalValue = parseInt(caseTotal.innerText);
    const subTotalCost = storSubtotal + casetotalValue;
    subTotal.innerText = subTotalCost;

    //Tax Calculation
    const subTotalTaxValue = subTotalCost * (10 / 100);
    const subTotalTaxFixed = subTotalTaxValue.toFixed(1);
    subTotalTax.innerText = subTotalTaxFixed;

    //final total 
    const finalTotalValue = subTotalCost - subTotalTaxFixed;
    finalTotal.innerText = finalTotalValue;


    /*___________ extra practice _______________*/
    // if (inputPlus.value >= 0) {
    //     document.getElementById('minus-btn-i').style.pointerEvents = 'auto';
    //     document.getElementById('mbl-minus-btn').style.pointerEvents = 'auto'
    // }
    // else {
    //     document.getElementById('minus-btn-i').style.pointerEvents = 'none';
    //     document.getElementById('mbl-minus-btn').style.pointerEvents = 'none'
    // }
})

/*________________ Button Plus __________________*/

document.getElementById('mbl-plus-btn').addEventListener('click', function () {
    const inputPlus = document.getElementById('input-plus');
    const inputPlusNumber = parseInt(inputPlus.value);
    inputPlus.value = inputPlusNumber + 1;

    // Total MObile cost
    const mblTotal = document.getElementById('mbl-total');
    mblTotal.innerText = inputPlus.value * 1219;

    //Subtotal Cost
    const caseTotal = document.getElementById('case-total');
    const casetotalValue = parseInt(caseTotal.innerText);
    const mblTotalValue = parseInt(mblTotal.innerText);
    const subTotalCost = casetotalValue + mblTotalValue;
    subTotal.innerText = subTotalCost;

    //Tax Calculation
    const subTotalTaxValue = subTotalCost * (10 / 100);
    const subTotalTaxFixed = subTotalTaxValue.toFixed(1);
    subTotalTax.innerText = subTotalTaxFixed;

    //final total 
    const finalTotalValue = subTotalCost - subTotalTaxFixed;
    finalTotal.innerText = finalTotalValue;

});


/*__________ casing Part ____________*/

/* _________Case minus button ____________*/
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const inputPlus = document.getElementById('case-input-btn');
    const inputPlusNumber = parseInt(inputPlus.value);
    inputPlus.value = inputPlusNumber - 1;

    // Total MObile cost
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = inputPlus.value * 59;

    //Subtotal Cost 
    const mblTotal = document.getElementById('mbl-total');
    const mblTotalValue = parseInt(mblTotal.innerText);
    const casetotalValue = parseInt(caseTotal.innerText);
    const subTotalCost = mblTotalValue + casetotalValue;
    subTotal.innerText = subTotalCost;

    //Tax Calculation
    const subTotalTaxValue = subTotalCost * (10 / 100);
    const subTotalTaxFixed = subTotalTaxValue.toFixed(1);
    subTotalTax.innerText = subTotalTaxFixed;

    //final total 
    const finalTotalValue = subTotalCost - subTotalTaxFixed;
    finalTotal.innerText = finalTotalValue;

});


/*_______________Case plus Button ________________*/

document.getElementById('case-plus-btn').addEventListener('click', function () {
    const inputPlus = document.getElementById('case-input-btn');
    const inputPlusNumber = parseInt(inputPlus.value);
    inputPlus.value = inputPlusNumber + 1;

    // Total MObile cost
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = inputPlus.value * 59;

    //Subtotal Cost 
    const mblTotal = document.getElementById('mbl-total');
    const mblTotalValue = parseInt(mblTotal.innerText);
    const casetotalValue = parseInt(caseTotal.innerText);
    const subTotalCost = mblTotalValue + casetotalValue;
    subTotal.innerText = subTotalCost;

    //Tax Calculation
    const subTotalTaxValue = subTotalCost * (10 / 100);
    const subTotalTaxFixed = subTotalTaxValue.toFixed(1);
    subTotalTax.innerText = subTotalTaxFixed;

    //final total 
    const finalTotalValue = subTotalCost - subTotalTaxFixed;
    finalTotal.innerText = finalTotalValue;

});


