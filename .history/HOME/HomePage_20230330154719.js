$(document).ready(function () {
  $(function () {
    loadComponent();
    setTimeout(function () {
      fetchProductList();
    }, 200);

    function loadComponent() {
      $(".Header").load("./Menu.html");
      $(".Banner").load("./Banner.html");
      $(".Product").load("./Product.html");
      $(".Footer").load("./Footer.html");
    }
  });
});
let productList = [];
function fetchProductList() {
  productList = [];
  // Check localStorage
  if (localStorage && localStorage.getItem("productList")) {
    let productListLocalStorage = JSON.parse(
      localStorage.getItem("productList")
    );
    productList = productListLocalStorage;
  }
  console.log(productList);
}
