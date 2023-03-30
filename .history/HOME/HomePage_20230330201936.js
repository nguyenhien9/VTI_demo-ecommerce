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

function fetchProductList() {
  let productList = [];
  if (localStorage && localStorage.getItem("Product")) {
    let getProducts = JSON.parse(localStorage.getItem("Product"));
    console.log(getProducts);
    productList = getProducts;
    console.log(productList);
    let render = productList.map(function (item) {
      return;
    });
    console.log(render);
  }
}
