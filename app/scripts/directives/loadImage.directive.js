angular
    .module('catalogApp')
    .directive('loadImage', loadImage);

function loadImage() {
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            product: '='
        }
    };

    return directive;

    function link(scope, element, attrs) {
        
        element.bind('change', function(event) {
            var files = event.target.files;
            $('#product-img').attr('src', 'images/' + files[0].name);
            changeImgUrl(files[0].name);
        });

        function changeImgUrl(url) {
            scope.product.image = 'images/' + url;
        };

    }
}