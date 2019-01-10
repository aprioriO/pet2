$(() => {
  const price = 299
  $(".js-button").on("click", function() {
    $(".js-total").text('$' + $(".js-quantity").val() * price)
  })
})
