$(document).ready(function () {
  $(function () {
    loadComponent();
    setTimeout(function () {
      fetchProductList();
    }, 200);

    function loadComponent() {
      // $(".Header").load("./Menu.html");
      document.querySelector(
        ".Header"
      ).innerHTML = `<div class="row justify-content-center align-items-center g-2">
      <nav class="navbar navbar-expand-sm navbar-light bg-warning">
        <div class="container">
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="./HomePage.html" aria-current="page"
                  >Home <span class="visually-hidden">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../ADMIN/AdminPage.html">Admin</a>
              </li>
            </ul>

            <ul class="navbar-nav d-flex my-2 my-lg-0 list-unstyled">
              <li>
                <a href="#!" class="nav-link text-decoration-none"
                  ><i class="fa fa-sign-in pe-2" aria-hidden="true"></i>Sign
                  in</a
                >
              </li>
              <li>
                <a href="#!" class="nav-link text-decoration-none"
                  ><i class="fa fa-user pe-2" aria-hidden="true"></i>Sign up</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>`;
      // $(".Banner").load("./Banner.html");
      document.querySelector(".Banner").innerHTML = `
        <div class="row justify-content-center align-items-center g-2 mt-1">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./asset/img/Banner/BannerIMG.png"
              class="d-block w-100"
              alt="..."
              height="320px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./asset/img/Banner/BannerImg1.png"
              class="d-block w-100"
              alt="..."
              height="320px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./asset/img/Banner/BannerImg2.png"
              class="d-block w-100"
              alt="..."
              height="320px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./asset/img/Banner/BannerImg3.png"
              class="d-block w-100"
              alt="..."
              height="320px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
        `;
      // $(".Product").load("./Product.html");
      document.querySelector(".Product").innerHTML = `
      <div class="row justify-content-center align-items-center g-2">
      <!-- Ảnh khuyến mại -->
      <div class="row justify-content-center align-items-center g-2">
        <img src="./asset/img/Product/ImgInfor.png" alt="" />
      </div>
      <!-- Product -->
      <div class="row d-flex flex-wrap mt-2 g-2 pt-2 ProductList"></div>
    </div>`;
      // $(".Footer").load("./Footer.html");
      document.querySelector(".Footer").innerHTML = `
      <br />
      <br />
      <br />
    <div class="row justify-content-center align-items-center g-2">
      <img src="./asset/img/Footer/FooterIMG.png" alt="" />
    </div>
      `;
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
          }" width="130px" height ="190px" alt=""/>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <p class="h3">${item.name}</p>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <p class="h5">Hãng sản xuất: ${item.manufacturer}</p>
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
    document.querySelector(".ProductList").innerHTML = productRender.join("");
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
