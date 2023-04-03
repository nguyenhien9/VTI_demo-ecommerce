$(function () {
  loadComponent();
});
function loadComponent() {
  $(".adminMenu").load("./adminMenu.html");
  $(".adminSideBar").load("./adminSideBar.html");
  // $(".contentProduct").load("./contentProduct.html");
}

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
      renderProduct(); // dom element
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
      <button type="button" class="btn btn-warning text-light" onclick = "showModal()">
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

function showModal() {
  const template = `
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
                    <button
                      type="button"
                      class="btn btn-primary fw-semibold"
                      onclick="addNewProduct()"
                    >
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
  `;
  document.body.insertAdjacentHTML("beforeend", template);
}
