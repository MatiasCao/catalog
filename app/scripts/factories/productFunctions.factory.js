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
    addProduct: addProduct,
    editProduct: editProduct,
    removeProduct: removeProduct,
    restoreProduct: restoreProduct,
    setProductDetail: setProductDetail,
    getProductDetail: getProductDetail,
    getCurrentProductList: getCurrentProductList,
    getProductById: getProductById,
    getTrashedProducts: getTrashedProduct,
    getNewProductId: getNewProductId
  };

  return services;

  function getProducts() {
    return $http.get('../../data/original.json');
  }

  function addProduct(product) {
  	currentProductList.unshift(product);
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
      }
    }
  }

  function restoreProduct(product) {
    for (var i = 0; i < trashedProducts.length; i++) {
      if (trashedProducts[i].id === product.id) {
        var restored = trashedProducts[i];
        trashedProducts.splice(i, 1);
        currentProductList.unshift(restored);
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

  function getNewProductId() {
  	var max = 0;
  	for (var i = 0; i < currentProductList.length; i++) {
  		if(currentProductList[i].id > max) {
  			max = currentProductList[i].id;
  		}
  	}
  	return max + 1;
  }
}

