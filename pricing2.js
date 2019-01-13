document.addEventListener("DOMContentLoaded", function() {

  const price = 299;

  function showTotal(card, quantityEl) {
    var quantity = quantityEl.value
    var totalEl = card.querySelector('.js-total')
    totalEl.innerText = "$" + quantity * price
  }

  var allCards  = document.querySelectorAll('.card')
  allCards.forEach(function(card) {
    // var card
    var quantityEl = card.querySelector('.js-quantity')

    function eventHandler() {
      showTotal(card, quantityEl) // card = card
    }

    var calculateBtn = card.querySelector('.js-button')
    calculateBtn.addEventListener('click', eventHandler)

    quantityEl.addEventListener('keyup', eventHandler)
    quantityEl.addEventListener('change', eventHandler)
  })
})
