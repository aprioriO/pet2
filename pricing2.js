document.addEventListener("DOMContentLoaded", function() {
  console.log('Your document is ready!');

  const price = 299;
  var totalElement = document.querySelector('.js-total') // find span element with initial total value
  var inputElement = document.querySelector('.js-quantity')

  inputElement.addEventListener("keyup", showTotal)
  inputElement.addEventListener("change", showTotal)

  var myButton = document.querySelector('.js-button')
  myButton.addEventListener("click", showTotal)

  function showTotal() {
    totalElement.innerHTML = "$" + inputElement.value * price
  }

  // -- try code

  var allCards  = document.querySelectorAll('.card')
  allCards.forEach(function(card) {
    console.log(card);
    var calculateBtn = card.querySelector('.js-button')
    console.log(calculateBtn);
  })


})
