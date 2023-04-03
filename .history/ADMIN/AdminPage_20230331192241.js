$(function () {
  loadComponent();
});
function loadComponent() {
  // $(".adminMenu").load("./adminMenu.html");
  document.querySelector(
    ".adminMenu"
  ).innerHTML = `<div class="row justify-content-center align-items-center g-2">
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
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
            <a
              class="nav-link fw-bold"
              href="../HOME/HomePage.html"
              aria-current="page"
              >Home <span class="visually-hidden">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="#">Admin</a>
          </li>
        </ul>

        <ul class="navbar-nav d-flex my-2 my-lg-0 list-unstyled">
          <li>
            <a href="#!" class="nav-link text-decoration-none fw-bold"
              ><i class="fa fa-sign-out pe-1" aria-hidden="true"></i>Sign
              out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  `;
  $(".adminSideBar").load("./adminSideBar.html");
  // $(".contentProduct").load("./contentProduct.html");
}

function showManufacturer(params) {
  document.querySelector(
    ".contentProduct"
  ).innerHTML = `<h1>This is Manufacturer Page Content</h1>`;
}
function showProduct(params) {
  $(".contentProduct").load(
    "./contentProduct.html",
    "data",
    function (response, status, request) {
      renderProduct(); // dom element
    }
  );
}
function showCategory() {
  document.querySelector(
    ".contentProduct"
  ).innerHTML = `<h1>This is Category Page Content</h1>`;
}
function showAccount() {
  document.querySelector(
    ".contentProduct"
  ).innerHTML = `<h1>This is Account Page Content</h1>`;
}

let productList = [];
function addNewProduct() {
  let getId = document.querySelector("#id").value;
  let getName = document.querySelector("#name").value;
  let getPrice = document.querySelector("#price").value;
  let getInfo = document.querySelector("#info").value;
  let getDetail = document.querySelector("#detail").value;
  let getStar = document.querySelector("#star").value;
  let getImage = getImgName(document.querySelector("#image").value);
  let getManufacturer = document.querySelector("#manufacturer").value;
  let getCategory = document.querySelector("#category").value;
  let newProduct = {
    id: getId,
    name: getName,
    price: getPrice,
    info: getInfo,
    detail: getDetail,
    star: getStar,
    image: getImage,
    manufacturer: getManufacturer,
    category: getCategory,
  };
  // Push vao mang productList
  productList.push(newProduct);
  // console.log("listProduct", productList);
  localStorage.setItem("Product", JSON.stringify(productList));
  // console.log(localStorage.setItem("Product", JSON.stringify(productList)));
  resetForm();
  renderProduct();
}
function resetForm() {
  document.querySelector("#id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#info").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#detail").value = "";
  document.querySelector("#star").value = "";
  document.querySelector("#image").value = "";
  document.querySelector("#manufacturer").value = "";
  document.querySelector("#category").value = "";
}
function renderProduct() {
  //Check localStorage
  if (localStorage && localStorage.getItem("productList")) {
    let products = JSON.parse(localStorage.getItem("productList"));
    productList = products;
  }
  document.querySelector("#tableBody").innerHTML = "";
  productList.forEach((product, index) => {
    let productId = index;

    document.querySelector("#tableBody").innerHTML += `
    <tr>
    <td scope="row">${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}<sup>đ</sup></td>
    <td>${product.info}</td>
    <td>${product.detail}</td>
    <td>${product.star}</td>
    <td>${product.image}</td>
    <td>${product.manufacturer}</td>
    <td>${product.category}</td>
    <td>
      <button type="button" class="btn btn-warning text-light" onclick ="editProduct()">
        Edit
      </button>
    </td>
    <td>
      <button type="button" class="btn btn-danger text-white" onclick="deleteProduct(${productId})">
        Delete
      </button>
    </td>
  </tr> 
    `;
  });
}
function getImgName(pathImage) {
  let itemArray = pathImage.split("\\");
  var imageName = itemArray[itemArray.length - 1];
  return imageName;
}
//Xóa sản phẩm
function deleteProduct(id) {
  let confirmDelete = confirm("Delete it?");
  if (confirmDelete) {
    productList.splice(id, 1);
    /**Lưu lại productList sau khi cắt vào local */
    localStorage.setItem("Product", JSON.stringify(productList));
    renderProduct();
  } else {
    alert("No products to delete!");
  }
}

function editProduct() {
  // show update Modal
  $("#updateModal").modal("show");

  let updateName = document.querySelector("#updateName").value;
  let updatePrice = document.querySelector("#updatePrice").value;
  let updateInfo = document.querySelector("#updateInfo").value;
  let updateDetail = document.querySelector("#updateDetail").value;
  let updateStar = document.querySelector("#updateStar").value;
  let updateImage = getImgName(document.querySelector("#updateImage").value);
  let updateManufacturer = document.querySelector("#updateManufacturer").value;
  let updateCategory = document.querySelector("#updateCategory").value;
}
