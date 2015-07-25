/// <reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js" />

(function () {
    angular.module('fa.font', [])
    .directive('faIcon', [function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                var spin = '';
                if (attrs.iconspin)
                    spin = ' fa-spin';
                var icon = '<i class="fa fa-' + attrs.faIcon + spin + '"></i>';
                var html = element.html();
                if (html) {
                    if (attrs.iconbefore)
                        icon = icon + ' ' + html;
                    else
                        icon = html + ' ' + icon;
                }

                element.html(icon);
            }
        }
    }]);
}());
