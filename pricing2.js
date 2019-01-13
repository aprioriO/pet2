// document.addEventListener("DOMContentLoaded", function() {
//   console.log('Your document is ready!');
//
//   const price = 299;
//
//   function showTotal() {
//     var totalElement = document.getElementsByClassName('js-total').item(0) // find span element with initial total value
//     var inputElement = document.getElementsByClassName('js-quantity').item(0)
//     var inputValue = inputElement.value
//     var myButton = document.getElementById('js-btn')
//
//     var newTotal = inputValue * price
//     totalElement.innerHTML = "$" + newTotal
//
//     myButton.addEventListener("click", showTotal)
//     inputElement.addEventListener("keyup", showTotal)
//     inputElement.addEventListener("change", showTotal)
//   }
//   showTotal()
// });


document.addEventListener("DOMContentLoaded", function() {
  console.log('Your document is ready!');

  const price = 299;
  var totalElement = document.querySelector('.js-total')// find span element with initial total value
  var inputElement = document.querySelector('.js-quantity')

  inputElement.addEventListener("keyup", showTotal)
  inputElement.addEventListener("change", showTotal)

  var myButton = document.querySelector('.js-button')
  myButton.addEventListener("click", showTotal)

  function findInnerelemts() {
    var currentCard = document.querySelector('.card')
    console.log("These are my cards:" + currentCard);
  }
  findInnerelemts()

  function showTotal() {
    totalElement.innerHTML = "$" + inputElement.value * price
  }
})
