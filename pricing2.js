document.addEventListener("DOMContentLoaded", function() {
  console.log('Your document is ready!');

  const price = 299;

  function showTotal() {
    var totalElement = document.getElementsByClassName('js-total').item(0) // find span element with initial total value
    var inputValue = document.getElementsByClassName('js-quantity').item(0).value
    var myButton = document.getElementById('js-btn')

    var newTotal = inputValue * price
    totalElement.innerHTML = "$" + newTotal

    myButton.addEventListener("click", showTotal)
    inputElement.addEventListener("keyup", showTotal)
    inputElement.addEventListener("change", showTotal)
  }
  showTotal()
});
