document.addEventListener("DOMContentLoaded", function() {
  console.log('Your document is ready!');

  const price = 299;
  var  elementCollection = document.getElementsByClassName('js-total')
  console.log (elementCollection);

  var totalElement = elementCollection.item(0) // find span element with initial total value
  console.log(totalElement);

  // var inputElement = document.getElementById('quantity')
  // var inputValue = inputElement.value

  var inputElementCollection = document.getElementsByClassName('js-quantity')
  var inputElement = inputElementCollection.item(0)
  var inputValue = inputElement.value
  console.log(`inputValue: ${inputValue}`);

  var newTotal = inputValue * price
  console.log(newTotal);

  totalElement.innerHTML = "$" + newTotal
  console.log(`my new total is ${totalElement.innerText}`);

  var myButton = document.getElementById('js-btn')
  console.log(`my botton is: ${myButton}`);
  myButton.addEventListener('click', function () {
    console.log('I am clicked');
  })

  inputElement.addEventListener('keyup', function () {
    console.log("Key up");
  })

  inputElement.addEventListener('change', function () {
    console.log("Change");
  })

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
