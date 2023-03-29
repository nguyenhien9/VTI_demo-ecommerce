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

function addNewProduct() {
  let productList = [];
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#name").value;
  let info = document.querySelector("#info").value;
  let detail = document.querySelector("#detail").value;
  let star = document.querySelector("#star").value;
  let image = getImgName(document.querySelector("#image").value);
  let manufacturer = document.querySelector("#manufacturer").value;
  let category = document.querySelector("#category").value;
  let newProduct = {
    id: id,
    name: name,
    info: info,
    detail: detail,
    star: star,
    image: image,
    manufacturer: manufacturer,
    category: category,
  };
  // Push vao mang productList
  productList.push(newProduct);
  localStorage.setItem("Product", JSON.stringify(newProduct));
  alert("Success!");
}
