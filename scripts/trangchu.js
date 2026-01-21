<script>
function addToCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    quantity: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm " + name + " vào giỏ hàng");
}
</script>