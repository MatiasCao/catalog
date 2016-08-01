angular
	.module('catalogApp')
	.factory('productFunctions', productFunctions);

productFunctions.$inject = ['$http'];

function productFunctions($http) {
	var productDetail;
	var currentProductList;

	$http.get('../../data/original.json').then(function(response) {
		currentProductList = response.data;
	});

	var services = {
		getProducts: getProducts,
		getTrash: getTrash,
		addProduct: addProduct,
		editProduct: editProduct,
		deleteProduct: deleteProduct,
		restoreProduct: restoreProduct,
		setProductDetail: setProductDetail,
		getProductDetail: getProductDetail,
		getCurrentProductList: getCurrentProductList,
		getProductById: getProductById
	};
	return services;

	function getProducts() {
		return $http.get('../../data/original.json');
	}

	function getTrash() {
	 	return $http.get('../../data/trashed.json');
	}

	function addProduct(){
	}

	function editProduct(){
	}

	function deleteProduct(){
	}

	function restoreProduct(){
	}

	function setProductDetail(product) {
		productDetail = product;
	}

	function getProductDetail() {
		return productDetail;
	}

	function getCurrentProductList() {
		return currentProductList;
	}

	function getProductById(searchedId) {
		for(var i = 0; i < currentProductList.length; i++) {
			if(currentProductList[i].id === searchedId) {
				return currentProductList[i];
			}
		}
	}
}

