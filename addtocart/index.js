const screen_cart = document.getElementById("screen_cart");
let cartList = [];

function addToCart(productName, price) {
  const check = cartList.find((item) => item.name === productName);

  if (check) {
    check.quantity++;
  } else {
    cartList.push({ name: productName, price: price, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(index) {
  const item = cartList[index];
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cartList.splice(index, 1);
  }
  renderCart();
}

function renderCart() {
  screen_cart.innerHTML = "";
  cartList.forEach((item, index) => {
    const renderItem = document.createElement("ul");
    renderItem.classList.add("cart-item");
    renderItem.innerHTML = `
            <span>${item.name} (${item.quantity}x)</span>
            <span class="item-price">$${item.price * item.quantity}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
    screen_cart.appendChild(renderItem);
  });

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartTotalValue = document.getElementById("total");
  cartTotalValue.textContent = totalPrice;
}
renderCart();
