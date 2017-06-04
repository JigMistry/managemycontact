'use strict';

contactApp.factory('AuthenticationService',['$cookieStore','$location',function($cookieStore,$location){
    var service = {};
    
    service.Login = function(username,password,callback){
        var response = {success: username === "user" && password === "123" };
        if(!response.success){
           response.message = 'Username or Password is incorrect';
        }else{
            $cookieStore.put('currentUser',username);
        }
        callback(response);
    }
    
    service.Logout = function(){
        console.log($cookieStore.get('currentUser'));
        $cookieStore.remove('currentUser');
        $location.path('/');
        console.log("cookie have "+$cookieStore.get('currentUser'));  
    }
    
    return service;
}]);