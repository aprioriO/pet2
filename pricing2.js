document.addEventListener("DOMContentLoaded", function() {
  console.log('Your document is ready!');

  const price = 299;
  // var inputElement = document.querySelector('.js-quantity')
  // inputElement.addEventListener("keyup", showTotal)
  // inputElement.addEventListener("change", showTotal)

  // -- try code

  function showTotal(card) {
    var quantityEl = card.querySelector('.js-quantity')
    var quantity = quantityEl.value
    var totalElement = card.querySelector('.js-total')
    totalElement.innerText = "$" + quantity * price
  }

  var allCards  = document.querySelectorAll('.card')
  allCards.forEach(function(card) {

    function eventHandler() {
      showTotal(card) // card = card
    }

    var calculateBtn = card.querySelector('.js-button')
    calculateBtn.addEventListener("click", eventHandler)
  })
})
