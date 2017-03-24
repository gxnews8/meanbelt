survey_app.factory('userFactory',function($http) {
  var factory = {};
  var user = [];
  factory.addUser = function(newUser,callback) {
    $http.post('/users',newUser).success(function(res) {
      factory.user = res;
      callback(user);

    })
  }
  return factory;
})
