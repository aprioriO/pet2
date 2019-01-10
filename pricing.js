console.log('sdfsd');
$(document).ready(function () {
//299
  const price = 299
   function addTotal() {
    $(".js-total-para").find(".js-total").remove()
    console.log("remove span");
    var newTotal = ($(".js-quantity").val()) * price
    console.log(newTotal);
    $(".js-total-para").append(`<span class="js-total"> $${newTotal} </span>`)
    console.log("new total is:" + newTotal);
   }
  $(".js-button").on("click", function(){
    addTotal()
  })
})
