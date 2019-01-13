document.addEventListener('DOMContentLoaded', function () {
  const price = 299

  function calcAndShowPrice ({ card, quantityEl, totalEl }) { // q->t
    var quantity = quantityEl.value
    totalEl.innerText = '$' + quantity * price
  }

  var allCards = document.querySelectorAll('.card')
  allCards.forEach(function (card) {
    var totalEl = card.querySelector('.js-total')
    var quantityEl = card.querySelector('.js-quantity')

    function eventHandler () {
      calcAndShowPrice({ card, totalEl, quantityEl }) // t->q
    }

    var calculateBtn = card.querySelector('.js-button')
    calculateBtn.addEventListener('click', eventHandler)

    quantityEl.addEventListener('keyup', eventHandler)
    quantityEl.addEventListener('change', eventHandler)
  })
})
