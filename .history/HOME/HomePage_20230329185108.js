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
  const productList = [
    {
      id: 1,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile1.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled mn">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },

    {
      id: 2,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile2.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
    {
      id: 3,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile3.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
    {
      id: 4,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile4.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
    {
      id: 5,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile5.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
    {
      id: 6,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile6.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
    {
      id: 7,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile7.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
    {
      id: 8,
      name: "Reno6 Z 5G",
      image: "./asset/img/Product/ImgMobile8.png",
      brand: "OPPO",
      price: "9.490.000",
      rating: `<ul class="rating d-flex list-unstyled">
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
      </li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
      <li><i class="fa fa-star" aria-hidden="true"></i></li>
    </ul>`,
    },
  ];
  let productRender = productList.map(function (item) {
    return `
      <div class="col-sm-3">
              <div class="row justify-content-start align-items-center g-2 ">
                <img key = "${item.id}" src="${item.image}" width="130px" height ="210px" alt=""/>
              </div>
              
              <div class="row justify-content-center align-items-center g-2">
                <p class="h3 font-weight-bold">${item.name}</p>
              </div>
              
              <div class="row justify-content-center align-items-center g-2">
                <p class="h4">Hãng sản xuất: ${item.brand}</p>
              </div>
              
              <div class="row justify-content-center align-items-center g-2">
                ${item.rating}
              </div>
              
              <div class="row d-flex align-items-center g-2">
                <a href="#!" class="text-reset text-decoration-none"
                  >${item.price}<u>đ</u>
                  <i
                    class="fa fa-shopping-cart text-danger fs-3 ms-2"
                    aria-hidden="true"
                  ></i
                ></a>
              </div>
            </div>
      `;
  });
  document.querySelector(".ProductList").innerHTML = productRender.join("");
}
