'use strict';
$(document).ready(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    //clear table
    var storeSubTotal = 0;

    // $("checkout").on("click", function() {
    //     // console.log($(".card-action").text());
    //     // console.log(tableScreen);
    //     console.log($(".table").empty());
    // });

    // on click get name and price
    $(".card-action").on("click", function() {
      var text = $(this).siblings().text().trim();
      var foodText = text.substring(0,text.indexOf("$"));
      var priceText = text.substring(text.indexOf('$'),text.length);
      var newRow = $("<tr>");
      var tdText = $("<td>");
      var tdPrice = $('<td class = "right-align">');
      var total = priceText.substring(1);
      var totalprice = $("#total");
      // console.log(priceText);
        newRow = (newRow.append(tdText, foodText), newRow.append(tdPrice, priceText));
        $("#table").append(newRow);
        // console.log($("#sub").text());
      // var idk = storeSubTotal.push(subTotal.text().substring(1));
        storeSubTotal += parseFloat(total);
        $("#sub").text("$" + storeSubTotal);
        var taxtotal = $("#tax").text("$" + (storeSubTotal * 0.029));
        var idk = taxtotal.text();
        console.log(idk);
        // console.log(taxtotal);
        // taxtotal.toFixed(2);
        // $("#total").text(storeSubTotal + taxtotal);

    });

}); // end of document ready

// end of jQuery name space

//variables for buttons

// var iceCreamButton = $('#iceCream');
// var pizzaButton = $('#pie');
// var burgerButton = $('#burger');
// if ($(this).parent().text() == "Ice Cream Biscuit $7.99 Add to Order") {
//     //add price and name of ice cream to table
//     console.log("Ice Cream Biscuit = $7.99");
// } else if ($(this).parent().text() == swineButton) {
//     //add price and name of swine to table
//     console.log("Smoked Swine = $14.99");
// } else if ($(this).parent().text() == pizzaButton) {
//     //add price and name of pizza to table
//     console.log("Arugula Pie = $11.99");
// } else if ($(this).parent().text() == burgerButton) {
//     //add price and name of burger to table
//     console.log("Royale with Cheese = $8.99");
// }
