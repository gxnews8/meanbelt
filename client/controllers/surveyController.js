survey_app.controller('surveyController',function($scope,$sessionStorage,surveyFactory) {
  $scope.errors = false;
  $scope.errorMsg = "";
  $scope.surveys = surveyFactory.getSurvey(function(surveys) {
    $scope.surveys = surveys;
  })
  $scope.addSurvey = function() {

    surveyFactory.addSurvey({survey:$scope.newSurvey,user:$sessionStorage.user},function(res) {
      if (res.errors !== undefined) {
        $scope.errors = true;
        $scope.errorMsg = res.errors;

      } else {
        $scope.errors = false;
      }

    })
    $scope.newSurvey = {};
  }


})
