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
    productList.push(getProducts);
    console.log(productList);
    productList.forEach(() => {
      let productRender = productList.map((item) => {
        return `
        <img src="./asset/img/Product/${item.image}" width ="130px" height ="190px"/>
        <div class ="h3">${item.name}</div>
        
        `;
      });
      document.querySelector(".ProductList").innerHTML = productRender;
    });
  }
}
