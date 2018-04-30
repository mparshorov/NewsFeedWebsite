angular.module('components', [])

  .directive('headlines', function() {
    return {
      restrict: 'E',
      scope: { headlines: "=" },
      template:
        `<div class="headlines">
            <div class="headline" ng-repeat='hl in headlines'>
                <div class="center"><img ng-src="{{hl.imageUrl}}"></div>
                <div class="title">{{hl.Title}}</div>
                <span>{{hl.Text}}</span>
            </div>
         </div>`,
      replace: true
    };
  })

  .directive('articles', function() {
    return {
      restrict: 'E',
      scope: { articles: "=" },
      template:
        `<div class="articles">
            <div class="article" ng-repeat='article in articles'>
                <div class="image"><img ng-src="{{article.imageUrl}}"></div>
                <span>{{article.Text}}</span>
            </div>
         </div>`,
      replace: true
    };
  })