angular
.module('catalogApp')
.factory('productFunctions', productFunctions);

productFunctions.$inject = ['$http', '$q'];

function productFunctions($http, $q) {

  var productDetail;
  var currentProductList = getProducts();
  var trashedProducts = [];

  $http.get('../../data/original.json').then(function (response) {
    currentProductList = response.data;
  });

  var services = {
    getProducts: getProducts,
    getTrash: getTrash,
    addProduct: addProduct,
    editProduct: editProduct,
    removeProduct: removeProduct,
    restoreProduct: restoreProduct,
    setProductDetail: setProductDetail,
    getProductDetail: getProductDetail,
    getCurrentProductList: getCurrentProductList,
    getProductById: getProductById,
    getTrashedProducts: getTrashedProduct
  };

  return services;

  function getProducts() {
    return $http.get('../../data/original.json');
  }

  function getTrash() {

  }

  function addProduct() {
  }

  function editProduct(product){
    for(var i = 0; i < currentProductList.length; i++) {
      if(currentProductList[i].id === product.id) {
        currentProductList[i] = product;
      }
    }
  }


  function removeProduct(productId) {
    for (var i = 0; i < currentProductList.length; i++) {
      if (currentProductList[i].id === productId) {
        var deleted = currentProductList[i];
        currentProductList.splice(i, 1);
        trashedProducts.push(deleted);
        console.log(trashedProducts);
      }
    }
  }

  function restoreProduct(productId) {
    for (var i = 0; i < trashedProducts.length; i++) {
      if (trashedProducts[i].id === productId) {
        var restored = trashedProducts[i];
        trashedProducts.splice(i, 1);
        currentProductList.unshift(restored);
        console.log(trashedProducts);
      }
    }
  }

  function setProductDetail(product) {
    productDetail = product;
  }

  function getProductDetail() {
    return productDetail;
  }

  function getCurrentProductList() {
    return $q.when(currentProductList).then(function (response) {
      return response.data || currentProductList;
    });
  }

  function getTrashedProduct() {
      return trashedProducts;
  }

  function getProductById(productId) {
    for (var i = 0; i < currentProductList.length; i++) {
      if (currentProductList[i].id === productId) {
        return currentProductList[i];
      }
    }
  }
}

