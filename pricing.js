$(() => {
  const price = 299
  $(".js-button").on("click", function() {
    $(".js-total").text('$' + $(".js-quantity").val() * price)
  })
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
