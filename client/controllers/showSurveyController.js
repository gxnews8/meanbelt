survey_app.controller('showSurveyController',function($scope,$sessionStorage,surveyFactory,$routeParams) {
  $scope.votes = [];
  $scope.surveyOptions = {question:"",options:[]};

  $scope.survey = surveyFactory.showSurvey($routeParams.index,function(res) {
    var survey = res[0];


    $scope.survey = $scope.surveyOptions;
    $scope.survey.question = survey.question;
    $scope.survey._id = survey._id;
    for (var i = 0; i < 4; i ++) {
      if (survey.votes[i] == undefined) {
        $scope.survey.options.push({name:survey.options[i], vote:0});
        $scope.votes.push(0);

      } else {
        $scope.survey.options.push({name: survey.options[i],vote:survey.votes[i]});
        $scope.votes.push(survey.votes[i]);
      }

    }

  })

  $scope.addVote = function(index) {
    $scope.votes[index] += 1;
    surveyFactory.addVote($scope.votes);

    $scope.survey.options[index].vote += 1 ;

  }

  $scope.minusVote = function(index) {
    $scope.votes[index] -= 1;
    surveyFactory.minusVote($scope.votes);

    $scope.survey.options[index].vote -= 1 ;

  }
})
