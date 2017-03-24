survey_app.controller('dashboardController',function($scope,userFactory,$location,$sessionStorage,surveyFactory) {
  $scope.surveys = surveyFactory.getSurvey(function(res) {
    $scope.surveys = res;
  })
  $scope.logout = function() {
    delete $sessionStorage.user
    $location.path('/');

  }

  $scope.$storage = $sessionStorage;

  $scope.deleteSurvey = function(index) {
    surveyFactory.deleteSurvey(index,function(res) {
      $scope.surveys = res;
    })
  }
})
