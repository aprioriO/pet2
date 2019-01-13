document.addEventListener("DOMContentLoaded", function() {

  const price = 299;

  function showTotal(card) {
    var quantityEl = card.querySelector('.js-quantity')
    var quantity = quantityEl.value
    var totalEl = card.querySelector('.js-total')
    totalEl.innerText = "$" + quantity * price
  }

  var allCards  = document.querySelectorAll('.card')
  allCards.forEach(function(card) {

    function eventHandler() {
      showTotal(card) // card = card
    }

    var calculateBtn = card.querySelector('.js-button')
    calculateBtn.addEventListener('click', eventHandler)

    var quantityEl = card.querySelector('.js-quantity')
    quantityEl.addEventListener('keyup', eventHandler)
    quantityEl.addEventListener('change', eventHandler)
  })
})
