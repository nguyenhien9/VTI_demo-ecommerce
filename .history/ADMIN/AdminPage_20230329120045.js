$(document).ready(function () {
  $(function () {
    loadComponent();
  });
  function loadComponent() {
    $(".adminMenu").load("./adminMenu.html");
    $(".adminSideBar").load("./adminSideBar.html");
    // $(".contentProduct").load("./contentProduct.html");
  }
});
function showManufacturer(params) {
  $(".contentProduct").load(
    "./Manufacturer.html",
    "data",
    function (response, status, request) {
      this; // dom element
    }
  );
}
function showProduct(params) {
  $(".contentProduct").load(
    "./contentProduct.html",
    "data",
    function (response, status, request) {
      renderProductList(); // dom element
    }
  );
}
function showCategory() {
  $(".contentProduct").load(
    "./Category.html",
    "data",
    function (response, status, request) {
      this; // dom element
    }
  );
}
function showAccount() {
  $(".contentProduct").load(
    "./Account.html",
    "data",
    function (response, status, request) {
      this; // dom element
    }
  );
}
function createNewProduct() {
  alert("Already Add!");
}
function renderProductList() {
  for (let index = 1; index < 7; index++) {
    $("#tableBody").append(`<tr>
    <td scope="row">${index}</td>
    <td>SAMSUNG Galaxy S22 Ultra</td>
    <td>30.990.000<sup>đ</sup></td>
    <td>
      6.9 inches, Chip MediaTek Helio G65 (12nm) mạnh mẽ. Ram
      4G, Pin 7000mAh
    </td>
    <td>ProductDetail1</td>
    <td>5</td>
    <td>image1.jpg</td>
    <td>SAMSUNG</td>
    <td>Điện thoại</td>
    <td>
      <button type="button" class="btn btn-warning text-light">
        Edit
      </button>
    </td>
    <td>
      <button type="button" class="btn btn-danger text-white">
        Delete
      </button>
    </td>
  </tr> -->
  <!-- Row-2 -->
  <!-- <tr>
    <td scope="row">2</td>
    <td>SAMSUNG Galaxy S22 Ultra</td>
    <td>30.990.000<sup>đ</sup></td>
    <td>
      6.9 inches, Chip MediaTek Helio G65 (12nm) mạnh mẽ. Ram
      4G, Pin 7000mAh
    </td>
    <td>ProductDetail1</td>
    <td>5</td>
    <td>image2.jpg</td>
    <td>SAMSUNG</td>
    <td>Điện thoại</td>
    <td>
      <button type="button" class="btn btn-warning text-light">
        Edit
      </button>
    </td>
    <td>
      <button type="button" class="btn btn-danger text-white">
        Delete
      </button>
    </td>
  </tr> 
    `);
  }
}

function localSave() {
  let getId = document.querySelector("#id").value;
  let getName = document.querySelector("#name").value;
  let getInfo = document.querySelector("#info").value;
  let getDetail = document.querySelector("#detail").value;
  let getStar = document.querySelector("#star").value;
  let getImg = document.querySelector("#image").value;
  let getManufacturer = document.querySelector("#manufacturer").value;
  let getCategory = document.querySelector("#category").value;
  let product = {
    id: getId,
    name: getName,
    info: getInfo,
    detail: getDetail,
    star: getStar,
    Image: getImg,
    manufacturer: getManufacturer,
    category: getCategory,
  };
  const item = JSON.stringify(productInfo);
  localStorage.setItem("Product List", product);
}
function resetProduct() {
  let getId = document.querySelector("#id").value;
  let getName = document.querySelector("#name").value;
  let getInfo = document.querySelector("#info").value;
  let getDetail = document.querySelector("#detail").value;
  let getStar = document.querySelector("#star").value;
  let getImg = document.querySelector("#image").value;
  let getManufacturer = document.querySelector("#manufacturer").value;
  let getCategory = document.querySelector("#category").value;
}
