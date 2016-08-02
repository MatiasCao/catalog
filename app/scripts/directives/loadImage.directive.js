angular
    .module('catalogApp')
    .directive('loadImage', loadImage);

function loadImage() {
    var directive = {
        link: link,
        restrict: 'A'
    };

    return directive;

    function link(scope, element, attrs) {
      element.bind('change', onChangeFunc);

        function onChangeFunc (event) {
            var files = event.target.files;
            $('#product-img').attr('src', 'images/' + files[0].name);
        }
    }
}