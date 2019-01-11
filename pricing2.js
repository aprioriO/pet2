document.addEventListener("DOMContentLoaded", function() {
  console.log('Your document is ready!');

  const price = 299;

  function showTotal() {
    var  elementCollection = document.getElementsByClassName('js-total')

    var totalElement = elementCollection.item(0) // find span element with initial total value

    var inputElementCollection = document.getElementsByClassName('js-quantity')
    var inputElement = inputElementCollection.item(0)
    var inputValue = inputElement.value
    var myButton = document.getElementById('js-btn')

    var newTotal = inputValue * price
    totalElement.innerHTML = "$" + newTotal
    // console.log(`my new total is ${totalElement.innerText}`);

    myButton.addEventListener("click", showTotal)

    inputElement.addEventListener("keyup", showTotal)

    inputElement.addEventListener("change", showTotal)
  }
  showTotal()
});



// $(() => {
//   const price = 299
//
//   function showTotal() {
//     $(".js-total").text('$' + $(".js-quantity").val() * price)
//   }
//   $(".js-button").on("click", showTotal)
//   $('.js-quantity').on("change keyup", showTotal)
// })

// textContent
// console.log(initTotal);
// var inputValue = document.getElementsByClassName('js-quantity').value;
// var total = inputValue * price;
// var createTextInTotal = document.createTextNode(total)
// function showTotal(){
//   initTotal.appendChild(createTextInTotal)
// }
//
// showTotal();
