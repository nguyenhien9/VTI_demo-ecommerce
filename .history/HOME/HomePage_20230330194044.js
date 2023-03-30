$(document).ready(function () {
  $(function () {
    let productList = [];
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

function fetchProductList() {
  productList = [];
  let getProducts = JSON.parse(localStorage.getItem(productList));
  productList = get;
  console.log(productList);
}
