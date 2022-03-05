/*
 * Copyright(C) 2005, G3-VS.
 * Vehicle Store
 *  
 *
 * Record of change:
 * DATE            Version             AUTHOR           DESCRIPTION
 * 2018-09-10      1.0                 Thainv           First Implement
 */


// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }



function plusMinus(element, a) {
    let cardRow = element.parentElement.parentElement
    let quantity = parseInt(cardRow.getElementsByClassName('quantity')[0].value)
    let max = parseInt(cardRow.getElementsByClassName('quantity')[0].max)
    let min = parseInt(cardRow.getElementsByClassName('quantity')[0].min)
    if (quantity < max && a > 0) {
        cardRow.getElementsByClassName('quantity')[0].value = quantity + parseInt(a);
    }
    if (quantity > min && a < 0) {
        cardRow.getElementsByClassName('quantity')[0].value = quantity + parseInt(a);
    }
    updateCardPrice(element)
}

function quantityChanged(element) {
    let input = element // target the correct input element that we want 
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    if (input.value > parseInt(input.max)) {
        input.value = parseInt(input.max)
    }
    updateCardPrice(element)
}



function updateCardPrice(element) {
    let cardRow = element.parentElement.parentElement
    let quantity = cardRow.getElementsByClassName('quantity')[0].value
    console.log(quantity)
    let price = cardRow.getElementsByClassName('price')[0].value
    cardRow.getElementsByClassName('cardPrice')[0].innerHTML = quantity * parseFloat(price) + ' $ '
    updateTotalPrice()
}


// total selected product and total price have to pay
function checkedCard(element) {
    updateTotalPrice()
}

function updateTotalPrice() {
    let cardRows = document.getElementsByClassName('shopping-card-row')
    var number = 0;
    var totalPrice = 0;
    for (let i = 0; i < cardRows.length; i++) {
        let cardRow = cardRows[i]
        if (cardRow.getElementsByClassName('selectedProduct')[0].checked) {
            let cardPrice = parseFloat(cardRow.getElementsByClassName('cardPrice')[0].innerHTML.replace('$', ' '))
            totalPrice += cardPrice;
            number++;
        }
    }
    if (number == 0) {
        document.getElementsByClassName('pay-button')[0].setAttribute('disabled', true)
    } else {
        document.getElementsByClassName('pay-button')[0].removeAttribute('disabled')
    }
    document.getElementsByClassName('nop')[0].innerHTML = number
    document.getElementsByClassName('totalPrice')[0].innerHTML = " " + totalPrice + " $ "
}



