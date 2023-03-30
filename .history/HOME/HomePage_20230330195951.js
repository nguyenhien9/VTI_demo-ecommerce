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
  let productList = [];
  if (localStorage && localStorage.getItem("Product")) {
    let getProducts = JSON.parse(localStorage.getItem("Product"));
    productList.push(getProducts);
  }
  let productRender = productList.map((item) => {
    return `
    <div class="col-sm-3">
      <div class="row justify-content-start align-items-center g-2 "
        <img src = "./asset/img/Product/${item.image}"/>
    <div class="row justify-content-center align-items-center g-2">
                <p class="h3 font-weight-bold">${item.name}</p>
              </div>
    
    </div>
    
    
    
    
    `;
  });
  document.querySelector(".ProductList").innerHTML = productRender;
}
