survey_app.factory('surveyFactory',function($http, $location) {
  var factory = {};
  var surveys = [];
  var currentSurveyID = "";
  factory.addSurvey = function(newSurvey,callback) {
    $http.post('/surveys',newSurvey).success(function(res) {
      factory.surveys = res;
      callback(res);
    })
    $location.path('/dashboard');
  }

  factory.getSurvey = function(callback) {
    $http.get('/surveys').success(function(res) {
      factory.surveys = res;
      callback(factory.surveys);
    })
  }

  factory.showSurvey = function(index,callback) {
    var id = factory.surveys[index]._id;
    factory.currentSurveyID = id;

    $http.get('/surveys/'+id).success(function(res) {
      callback(res);

    })
  }

  factory.addVote = function(votes) {
    $http.put('/surveys/'+factory.currentSurveyID,votes).success(function(res) {
      factory.surveys = res;

    })

  }

  factory.minusVote = function(votes) {
    $http.put('/surveys/'+factory.currentSurveyID,votes).success(function(res) {
      factory.surveys = res;

    })

  }

  factory.deleteSurvey = function(index,callback) {
    var id = factory.surveys[index]._id;
    $http.delete('/surveys/'+id).success(function(res) {
      factory.surveys = res;
      callback(res);
    })
  }
  return factory;
})
