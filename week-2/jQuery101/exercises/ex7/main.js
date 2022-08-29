$("#items").on("click", ".item", function () {
  if ($(this).data().instock) {
    if (isItemInCart($(this).text(), $("#cart"))) {
      let indexOfItem = getIndexOfChild($(this).text());
      let old_count = $(`#cart`).children().eq(indexOfItem).data("amount");

      $(`#cart`)
        .children()
        .eq(indexOfItem)
        .text(`${$(this).text()}x${old_count + 1}`);
      $(`#cart`)
        .children()
        .eq(indexOfItem)
        .data("amount", old_count + 1);
    } else {
      $("#cart").append(
        `<div class=cart-item id = ${$(this).text()} data-amount = 1> ${$(
          this
        ).text()}</div>`
      );
    }
  }
});

const getItemsFromCart = function (cartElements) {
  let retArr = [];
  for (let element of cartElements) {
    retArr.push(element.id);
  }
  return retArr;
};

const isItemInCart = function (itemName, cartElement) {
  return getItemsFromCart(cartElement.children()).includes(itemName);
};

const getIndexOfChild = function (itemName) {
  for (
    let itemIndex = 0;
    itemIndex < $("#cart").children().length;
    itemIndex++
  ) {
    if ($(`#cart`).children().eq(itemIndex).attr("id") === itemName) {
      return itemIndex;
    }
  }
};

$("body").on("click", ".cart-item", function () {
  $(this).remove();
});
