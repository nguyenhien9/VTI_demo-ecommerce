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
  if (localStorage && localStorage.getItem("Product")) {
    let getProducts = JSON.parse(localStorage.getItem("Product"));
    productList = getProducts;
    let productRender = productList.map(function (item) {
      return `
      <div class="col-sm-3">
        <div class="row justify-content-start align-items-center g-2 ">
          <img src="./asset/img/Product/${item.image}" width="130px" height ="210px" alt=""/>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <p class="h3 font-weight-bold">${item.name}</p>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <p class="h4">Hãng sản xuất: ${item.manufacturer}</p>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          ${item.rating}
        </div>
        <div class="row d-flex align-items-center g-2">
          <a href="#!" class="text-reset text-decoration-none">${item.price} <sup><u>đ</u></sup>
            <i class="fa fa-shopping-cart text-danger fs-3 ms-2" aria-hidden="true"></i></a>
        </div>
      </div>
      `;
    });
    document.querySelector(".ProductList").innerHTML = productRender;
    ratingStar();
  }
}
function ratingStar() {
  let getRatingStar = productList.map((item) => {
    return item.star;
  });
  for (let i = 0; i < parseInt(getRatingStar); i++) {
    console.log(typeof getRatingStar);
  }
}
