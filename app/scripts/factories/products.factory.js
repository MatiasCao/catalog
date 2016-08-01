angular
	.module('catalogApp')
	.factory('productFunctions', productFunctions);

productFunctions.$inject = ['$http'];

function productFunctions($http) {
	var services = {
			getProducts: getProducts,
			getTrash: getTrash,
			addProduct: addProduct,
			editProduct: editProduct,
			deleteProduct: deleteProduct,
			restoreProduct: restoreProduct,
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
}

