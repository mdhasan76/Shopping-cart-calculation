function getValue(elementid) {
    const mblInput = document.getElementById('input-plus');
    const idValueString = mblInput.value;
    const idValueNumber = parseInt(idValueString);

    let newMblNumber;
    if (elementid === true) {
        newMblNumber = idValueNumber + 1;
    }
    else {
        newMblNumber = idValueNumber - 1;
    }

    mblInput.value = newMblNumber;
    return newMblNumber;
};

function getCaseValue(elementId) {
    const caseInput = document.getElementById('case-input-btn');
    const caseInputValue = parseInt(caseInput.value);

    let caseNumber;
    if (elementId === true) {
        caseNumber = caseInputValue + 1;
    }
    else {
        caseNumber = caseInputValue - 1;
    }

    caseInput.value = caseNumber;
    return caseNumber;

}

/*___________For MObile total Price_____________*/
function totalPrice(newMblNumber) {
    const MblTotalPrice = newMblNumber * 1219;
    const mblId = document.getElementById('mbl-total');
    return mblId.innerText = MblTotalPrice;
}

/*____________For case total price______________ */
function totalCasePrice(caseNumber) {
    const caseTotalText = caseNumber * 59;
    const caseTotal = document.getElementById('case-total');
    return caseTotal.innerText = caseTotalText;

}
function getInnerText(elementid) {
    const id = document.getElementById(elementid);
    const idValueString = id.innerText;
    const idTextNumber = parseInt(idValueString);
    return idTextNumber;
}

/*_________Subtotal Cost calculation____________*/
function totalCost() {
    const totalCostNumber = getInnerText('mbl-total') + getInnerText('case-total');
    return totalCostNumber;
}

/*____________tax Calculation ________________*/
function taxCalculation() {
    const taxNumber = getInnerText('subtotal') * (10 / 100);
    const taxConvertNumber = taxNumber.toFixed(2);
    return parseFloat(taxConvertNumber)
}

/*____________Total Price calculation____________*/
function finalTotal() {
    const subFinalTotal = getInnerText('subtotal');
    const taxNumber = parseFloat(tax.innerText);
    return subFinalTotal - taxNumber;
}