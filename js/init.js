'use strict';
$(document).ready(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var storeSubTotal = 0;
    // on click get name and price
    $(".card-action").on("click", function() {
        var text = $(this).siblings().text().trim();
        var foodText = text.substring(0, text.indexOf("$"));
        var priceText = text.substring(text.indexOf('$'), text.length);
        var newRow = $("<tr>");
        var tdText = $("<td>");
        var tdPrice = $('<td class = "right-align">');
        var total = priceText.substring(1);
        var totalprice = $("#total");
        newRow = (newRow.append(tdText, foodText), newRow.append(tdPrice, priceText));
        $("#table").append(newRow);
        storeSubTotal += Number(total);
        var taxtotalnum = (storeSubTotal * 0.029).toFixed(2);
        var subnumber = $("#sub").text("$" + (storeSubTotal).toFixed(2));
        var taxtotal = $("#tax").text("$" + taxtotalnum);
        $("#total").text("$" + (Number(storeSubTotal) + Number(taxtotalnum)));
    });
}); // end of document ready

// end of jQuery name space
