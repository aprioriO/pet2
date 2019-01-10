$(() => {
  const price = 299
  function addTotal() {
    var newTotal = ($(".js-quantity").val()) * price
    console.log(newTotal);
    $(".js-total").text(`$${newTotal}`)
    console.log("new total is:" + newTotal);
  }
  $(".js-button").on("click", addTotal)
})
