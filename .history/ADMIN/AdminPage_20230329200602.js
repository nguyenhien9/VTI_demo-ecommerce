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
  let getId = document.querySelector("#id").value;
  let getName = document.querySelector("#name").value;
  let getPrice = document.querySelector("#price").value;
  let getInfo = document.querySelector("#info").value;
  let getDetail = document.querySelector("#detail").value;
  let getStar = document.querySelector("#star").value;
  // let getImage = getImgName(document.querySelector("#image").value);
  let getManufacturer = document.querySelector("#manufacturer").value;
  let getCategory = document.querySelector("#category").value;
  let newProduct = {
    id: getId,
    name: getName,
    price: getPrice,
    info: getInfo,
    detail: getDetail,
    star: getStar,
    manufacturer: getManufacturer,
    category: getCategory,
  };
  // Push vao mang productList
  productList.push(newProduct);
  // localStorage.setItem("Product", JSON.stringify(newProduct));

  alert("Success!");
  resetForm();
}
function resetForm() {
  document.querySelector("#id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#info").value = "";
  document.querySelector("#detail").value = "";
  document.querySelector("#star").value = "";
  document.querySelector("#image").value = "";
  document.querySelector("#manufacturer").value = "";
  document.querySelector("#category").value = "";
}
