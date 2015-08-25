angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("about/about.tpl.html","<h1>About Ontario Online Portal</h1>\n\n<div class=\"pure-g page-content\">\n    <div class=\"pure-u-1\">\n        <p class=\"lead\">\n            This is some text you want to lead in with.\n        </p>\n        <p>\n            Here\'s some additional information.\n        </p>\n    </div>\n</div>\n");
$templateCache.put("blog/blog.tpl.html","<h1>Blog <small>{{ vm.subtitle }}</small></h1>\n\n<div class=\"pure-g page-content\">\n    <div class=\"pure-u-1\">\n\n        <div class=\"search-container\">\n            <revealing-search-input search-callback=\"vm.search(term)\"></revealing-search-input>\n        </div>\n\n        <ul class=\"no-bullet post-list\">\n            <li dir-paginate=\"post in vm.posts | itemsPerPage: 10\" class=\"post-list-row\">\n                <span class=\"post-list-meta\">\n                    <div class=\"date\">\n                        {{ post.date | date:\'dd MMM yyyy\' }}\n                    </div>\n                </span>\n                <div class=\"post-list-entry\">\n                    <h2><a ui-sref=\"post({ id: post.ID, title: post.slug })\" class=\"post-list-title\">{{ post.title | decodeHtmlCodes  }}</a></h2>\n\n                    <ul class=\"tags\">\n                        <li ng-repeat=\"tag in post.terms.post_tag\">\n                            <a ui-sref=\"postsByTag({ tag: tag.slug })\">{{ tag.name }}</a>\n                        </li>\n                    </ul>\n\n                    <div class=\"post-list-excerpt\" ng-bind-html=\"post.excerpt\">\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class=\"list-pagination\">\n            <dir-pagination-controls template-url=\"common/directives/pagination/dirPagination.tpl.html\" on-page-change=\"vm.scrollToTop()\" direction-links=\"false\">\n            </dir-pagination-controls>\n        </div>\n    </div>\n</div>");
$templateCache.put("blog/post.tpl.html","<h1>{{ vm.post.title }}</h1>\n\n<div class=\"pure-g page-content\">\n    <div class=\"pure-u-1\">\n\n        <div class=\"post-meta\">\n            <div class=\"date\">\n                {{ vm.post.date | date:\'dd MMM yyyy\' }}\n            </div>\n            <ul class=\"tags\">\n                <li ng-repeat=\"tag in vm.post.terms.post_tag\">\n                    <a ui-sref=\"postsByTag({ tag: tag.slug })\">{{ tag.name }}</a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"post-body\" ng-bind-html=\"vm.post.content\"></div>\n    </div>\n</div>");
$templateCache.put("home/home.tpl.html","<div class=\"pure-g page-content\" ng-controller=\"HomeController as vm\">\n    <div class=\"pure-u-1\">\n        <div class=\"hero-box\">\n            <h1>Ontario Online Portal</h1>\n            <p>\n                A series of tutorials for the <b>University of Toronto</b>\'s Human Biology Department.\n            </p>\n        </div>\n    </div>\n    <!--\n     <div class=\"pure-u-1 pure-u-md-1-2\">\n        <h2>Featured Posts</h2>\n        <ul class=\"featured-articles\">\n            <li ng-repeat=\"post in vm.featuredPosts\">\n                <a ui-sref=\"post({ id: post.ID, title: post.slug })\">{{ post.title }}</a>\n            </li>\n        </ul>\n    </div>\n    -->\n      <div class=\"jumbo-btn-ctr\">\n        <div class=\"pure-u-1-2\">\n          <button class=\"jumbo-btn button-secondary button-success\">\n            <i class=\"fa fa-user-plus\"></i>Register\n          </button>\n        </div>\n        <div class=\"pure-u-1-2\">\n          <button class=\"jumbo-btn button-secondary\">\n            <i class=\"fa fa-users\"></i>Login\n          </button>\n        </div>\n      </div>\n</div>\n");
$templateCache.put("tutorials/tutorial.tpl.html","<h1>{{ vm.post.title }}</h1>\n\n<div class=\"pure-g page-content\">\n    <div class=\"pure-u-1\">\n\n        <div class=\"post-meta\">\n            <div class=\"date\">\n                {{ vm.post.date | date:\'dd MMM yyyy\' }}\n            </div>\n            <ul class=\"tags\">\n                <li ng-repeat=\"tag in vm.post.terms.post_tag\">\n                    <a ui-sref=\"postsByTag({ tag: tag.slug })\">{{ tag.name }}</a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"post-body tutorial-body\" ng-bind-html=\"vm.post.content\"></div>\n    </div>\n</div>\n");
$templateCache.put("tutorials/tutorials.tpl.html","<h1>Tutorials <small>{{ vm.subtitle }}</small></h1>\n\n<div class=\"pure-g page-content\">\n    <div class=\"pure-u-1\">\n\n        <ul class=\"no-bullet post-list\">\n            <li dir-paginate=\"post in vm.posts | itemsPerPage: 10\" class=\"post-list-row\">\n                <div class=\"tutorial-list-entry\">\n                    <h2><a ui-sref=\"tutorial({ id: post.ID, title: post.slug })\" class=\"post-list-title\">{{ post.title | decodeHtmlCodes  }}</a></h2>\n\n                    <div class=\"post-list-excerpt\" ng-bind-html=\"post.excerpt\">\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class=\"list-pagination\">\n            <dir-pagination-controls template-url=\"common/directives/pagination/dirPagination.tpl.html\" on-page-change=\"vm.scrollToTop()\" direction-links=\"false\">\n            </dir-pagination-controls>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("common/directives/pagination/dirPagination.tpl.html","<ul class=\"pagination\" ng-if=\"1 < pages.length\">\n    <li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n        <a class=\"\" href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a>\n    </li>\n    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n        <a class=\"\" href=\"\" ng-click=\"setCurrent(pagination.current - 1)\">&lsaquo;</a>\n    </li>\n    <li ng-repeat=\"pageNumber in pages track by $index\">\n        <a class=\"\" href=\"\" ng-click=\"setCurrent(pageNumber)\"  ng-class=\"{ \'active\' : pagination.current == pageNumber, disabled : pageNumber == \'...\' }\">{{ pageNumber }}</a>\n    </li>\n\n    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\">\n        <a class=\"\" href=\"\" ng-click=\"setCurrent(pagination.current + 1)\">&rsaquo;</a>\n    </li>\n    <li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\">\n        <a class=\"\" href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a>\n    </li>\n</ul>");
$templateCache.put("common/directives/revealingSearchInput/revealingSearchInput.tpl.html","<form ng-submit=\"searchButtonClick()\" name=\"searchForm\">\n    <div class=\"search-input\" ng-class=\"{ display: showSearchInput }\">\n        <input type=\"text\" ng-model=\"searchTerm\" ng-blur=\"searchInputBlur()\">\n    </div>\n    <button>\n        <i class=\"icon-search\"></i>\n    </button>\n</form>");}]);