function showMessage() {
  alert("คุณได้รับส่วนลด 10%");
}

function addCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " ถูกเพิ่มลงตะกร้าแล้ว");
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cartList");

  if (cart.length === 0) {
    cartList.innerHTML = "<li>ยังไม่มีสินค้าในตะกร้า</li>";
  } else {
    cartList.innerHTML = "";
    cart.forEach(function(item) {
      let li = document.createElement("li");
      li.textContent = item;
      cartList.appendChild(li);
    });
  }
}

function clearCart() {
  localStorage.removeItem("cart");
  alert("ล้างตะกร้าเรียบร้อยแล้ว");
  location.reload();
}

function sendContact(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  alert("ขอบคุณคุณ " + name + " เราได้รับข้อความแล้ว");

  document.querySelector("form").reset();
}