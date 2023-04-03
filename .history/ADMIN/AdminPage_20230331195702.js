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
  // $(".adminSideBar").load("./adminSideBar.html");
  document.querySelector(".adminSideBar").innerHTML = `<div class="col-md-12">
  <h4 class="fw-bold">Danh mục</h4>
  <div class="list-group text-center">
    <button
      type="button"
      class="list-group-item list-group-item-action"
      onclick="showManufacturer()"
    >
      Manufacturer
    </button>
    <button
      type="button"
      class="list-group-item list-group-item-action"
      onclick="showCategory()"
    >
      Category
    </button>
    <button
      type="button"
      class="list-group-item list-group-item-action product-btn"
      onclick="showProduct()"
    >
      Product
    </button>
    <button
      type="button"
      class="list-group-item list-group-item-action"
      onclick="showAccount()"
    >
      Account
    </button>
  </div>

  <h4 class="fw-bold">Manufacturers</h4>
  <div class="list-group text-center">
    <button
      type="button"
      class="list-group-item list-group-item-action"
      aria-current="true"
    >
      SAMSUNG
    </button>
    <button type="button" class="list-group-item list-group-item-action">
      APPLE
    </button>
    <button type="button" class="list-group-item list-group-item-action">
      XIAOMI
    </button>
    <button type="button" class="list-group-item list-group-item-action">
      OPPO
    </button>
  </div>
  <h4 class="fw-bold">Category</h4>
  <ul class="list-group">
    <li class="list-group-item" aria-current="true">
      <div class="mb-3">
        <select class="form-select form-select-md" name="" id="">
          <option selected>Category</option>
          <option value="1">Mobile Phone</option>
          <option value="2">Tablet</option>
          <option value="3">Laptop</option>
        </select>
      </div>
    </li>
    <li class="list-group-item" aria-current="true">
      <button type="button" class="btn btn-outline-secondary">
        Filter
      </button>
    </li>
  </ul>
</div>
  `;
  // $(".contentProduct").load("./contentProduct.html");
}

function showManufacturer(params) {
  document.querySelector(
    ".contentProduct"
  ).innerHTML = `<h1>This is Manufacturer Page Content</h1>`;
}
function showProduct(params) {
  // $(".contentProduct").load(
  //   "./contentProduct.html",
  //   "data",
  //   function (response, status, request) {
  //     renderProduct(); // dom element
  //   }
  // );
  document.querySelector(".contentProduct").innerHTML = `
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <br />
      <br />
      <!-- Search -->
      <div class="row justify-content-center g-2">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div class="row justify-content-center align-items-center g-2">
            <form
              class="d-flex border rounded w-100"
              style="padding: 8px 8px 8px 20px"
              role="search"
            >
              <div class="col-8 pe-4">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="col-4">
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Search -->
      <!-- Add product -->
      <br />

      <div class="row justify-content-center border rounded g-2 updateModal">
        <div class="row justify-content-center g-2 ps-2">
          <div class="col-12">
            <button
              type="button"
              class="btn btn-info text-light"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
            >
              Add new
            </button>
          </div>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-sm-12">
            <div class="table-responsive" style="font-size: 14px">
              <table class="table table-light">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Info</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Star</th>
                    <th scope="col">Image</th>
                    <th scope="col">NSX</th>
                    <th scope="col">Category</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <!-- Row-1 -->

                  <!-- Row-2 -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-sm-12">
            <nav aria-label="Page navigation">
              <ul class="pagination ps-4">
                <li class="page-item" aria-current="page">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <!--  Modal Add New  -->
      <!-- Modal Body-->
      <div
        class="modal fade"
        id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">Create New Product</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="col-12">
                  <!-- Product Properties -->

                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Id</label>
                    <input
                      type="text"
                      name="id"
                      id="id"
                      class="form-control"
                      placeholder="Input Id {1,2,....}"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      placeholder="Input Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Price</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      class="form-control"
                      placeholder="Input price"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Info</label>
                    <textarea
                      class="form-control"
                      name="info"
                      id="info"
                      rows="3"
                      placeholder="Input Info"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Detail</label>
                    <textarea
                      class="form-control"
                      name="detail"
                      id="detail"
                      rows="4"
                      placeholder="Input detail"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Star</label>
                    <input
                      type="text"
                      name="star"
                      id="star"
                      class="form-control"
                      placeholder="Input field"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Image</label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      class="form-control text-secondary"
                      accept="image/*"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold"
                      >Manufacturer</label
                    >
                    <select
                      class="form-select form-select-md text-secondary"
                      name="manufacturer"
                      id="manufacturer"
                    >
                      <option selected>--Choose a Manufacturer--</option>
                      <option value="SAMSUNG">SAMSUNG</option>
                      <option value="APPLE">APPLE</option>
                      <option value="XIAOMI">XIAOMI</option>
                      <option value="OPPO">OPPO</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Category</label>
                    <select
                      class="form-select form-select-md text-secondary"
                      name=""
                      id="category"
                    >
                      <option selected>--Choose a Category--</option>
                      <option value="Mobile Phone">Mobile Phone</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Laptop">Laptop</option>
                    </select>
                  </div>

                  <!-- Action -->

                  <div class="col-12">
                    <button
                      type="button"
                      class="btn btn-primary fw-semibold"
                      onclick="addNewProduct()"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning text-light fw-semibold"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="col-12">
                <button
                  type="button"
                  class="btn btn-danger float-end"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Edit -->
      <div
        class="modal fade"
        id="updateModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">Update Product</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="col-12">
                  <!-- Product Properties -->

                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Id</label>
                    <input
                      type="text"
                      name="updateId"
                      id="updateId"
                      class="form-control"
                      placeholder="Input Id {1,2,....}"
                      disabled
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Name</label>
                    <input
                      type="text"
                      name="updateName"
                      id="updateName"
                      class="form-control"
                      placeholder="Input Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Price</label>
                    <input
                      type="text"
                      name="updatePrice"
                      id="updatePrice"
                      class="form-control"
                      placeholder="Input price"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Info</label>
                    <textarea
                      class="form-control"
                      name="updateInfo"
                      id="updateInfo"
                      rows="3"
                      placeholder="Input Info"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Detail</label>
                    <textarea
                      class="form-control"
                      name="updateDetail"
                      id="updateDetail"
                      rows="4"
                      placeholder="Input detail"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Star</label>
                    <input
                      type="text"
                      name="updateStar"
                      id="updateStar"
                      class="form-control"
                      placeholder="Input field"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Image</label>
                    <input
                      type="file"
                      name="updateImage"
                      id="updateImage"
                      class="form-control text-secondary"
                      accept="image/*"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold"
                      >Manufacturer</label
                    >
                    <select
                      class="form-select form-select-md text-secondary"
                      name="updateManufacturer"
                      id="updateManufacturer"
                    >
                      <option selected>--Choose a Manufacturer--</option>
                      <option value="SAMSUNG">SAMSUNG</option>
                      <option value="APPLE">APPLE</option>
                      <option value="XIAOMI">XIAOMI</option>
                      <option value="OPPO">OPPO</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label fw-bold">Category</label>
                    <select
                      class="form-select form-select-md text-secondary"
                      name="updateCategory"
                      id="updateCategory"
                    >
                      <option selected>--Choose a Category--</option>
                      <option value="Mobile Phone">Mobile Phone</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Laptop">Laptop</option>
                    </select>
                  </div>

                  <!-- Action -->

                  <div class="col-12">
                    <button type="button" class="btn btn-primary fw-semibold" onclick ="updateProduct()">
                      Update
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning text-light fw-semibold"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="col-12">
                <button
                  type="button"
                  class="btn btn-danger float-end"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
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
      <button type="button" class="btn btn-warning text-light" onclick ="editProduct(${productId})">
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
// Update product
function editProduct(id) {
  productList.forEach((product, index) => {
    console.log(product.name);
  });
  // show update Modal
  $("#updateModal").modal("show");
}
function updateProduct() {
  let updateName = document.querySelector("#updateName").value;
  let updatePrice = document.querySelector("#updatePrice").value;
  let updateInfo = document.querySelector("#updateInfo").value;
  let updateDetail = document.querySelector("#updateDetail").value;
  let updateStar = document.querySelector("#updateStar").value;
  let updateImage = getImgName(document.querySelector("#updateImage").value);
  let updateManufacturer = document.querySelector("#updateManufacturer").value;
  let updateCategory = document.querySelector("#updateCategory").value;

  let updateProduct = {
    name: updateName,
    price: updatePrice,
    info: updateInfo,
    detail: updateDetail,
    star: updateStar,
    image: updateImage,
    manufacturer: updateManufacturer,
    category: updateCategory,
  };
  console.log(updateProduct);
}
