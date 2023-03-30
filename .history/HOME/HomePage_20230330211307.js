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
          <img src="./asset/img/Product/${
            item.image
          }" width="130px" height ="210px" alt=""/>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <p class="h3 font-weight-bold">${item.name}</p>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <p class="h4">Hãng sản xuất: ${item.manufacturer}</p>
        </div>
        <div class="row justify-content-center align-items-center g-2">
        <ul class="rating d-flex list-unstyled">
        ${getRatingStar(item.star)}
        </ul>
        </div>
        <div class="row d-flex align-items-center g-2">
          <a href="#!" class="text-reset text-decoration-none">${
            item.price
          } <sup><u>đ</u></sup>
            <i class="fa fa-shopping-cart text-danger fs-3 ms-2" aria-hidden="true"></i></a>
        </div>
      </div>
      `;
    });
    document.querySelector(".ProductList").innerHTML = productRender;
    console.log(productList);
    getRatingStar();
  }
}
function getRatingStar(star) {
  let ratingStar = "";
  for (let i = 0; i < star; i++) {
    ratingStar += `
    <li>
    <i class="fa fa-star text-warning" aria-hidden="true"></i>
    </li>
    `;
  }
  for (let i = 0; i < 5 - star; i++) {
    ratingStar += `
    <li>
    <i class="fa fa-star" aria-hidden="true"></i>
    </li>
    `;
  }
  return ratingStar;
}
