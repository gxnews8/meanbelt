survey_app.controller('userController',function($rootScope,userFactory,$location,$scope,$sessionStorage) {
  $scope.addUser = function() {
    userFactory.addUser($scope.newUser,function(user) {
      $scope.$storage = $sessionStorage.$default({
          user: userFactory.user.name
      });
      $scope.newUser = {};
      $location.path('/dashboard');
    })
  }

})
