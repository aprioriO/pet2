$(() => {
  const price = 299

  function showTotal() {
    $(".js-total").text('$' + $(".js-quantity").val() * price)
  }
  $(".js-button").on("click", showTotal)
  $('.js-quantity').on("change keyup", showTotal)
})

// $(() => {
//   const price = 299
//   const $total = $(".js-total")
//   const $quantity = $(".js-quantity")
//
//   function getQuantity() {
//     return $quantity.val()
//   }
//
//   function calculateTotalPrice() {
//     return getQuantity() * price
//   }
//
//   function showTotal() {
//     $total.text('$' + calculateTotalPrice())
//   }
//
//   $(".js-button").on("click", showTotal)
// })
