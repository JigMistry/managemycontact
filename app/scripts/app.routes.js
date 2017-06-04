contactApp.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/",{
      templateUrl: '../views/authentication/login.html',
      controller:  'AuthController'
    })
    .when("/home",{
      templateUrl: '../views/home/home.html',
      controller: 'HomeController'
    
    }).
    otherwise({
        redirectTo: "/"
    })
      
})
.run(function($rootScope,$cookieStore,$location){
    $rootScope.$on('$routeChangeSuccess',function(){
        if(!$cookieStore.get('currentUser')){
           $location.path('/');
        }
    })
})