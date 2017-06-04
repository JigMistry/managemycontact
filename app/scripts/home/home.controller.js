'use strict';

contactApp.controller('HomeController',['$cookieStore','$location','AuthenticationService',function($cookieStore,$location,AuthenticationService){
    var self = this;
    this.person = {};
    this.person.name = '';
    this.person.phoneNumber = '';
    this.person.email = '';
    this.contactId;
    this.readMode = false;
    this.updateMode = false;
    this.addMode = true;
    this.contacts = [];
    
    
    if(!JSON.parse(localStorage.getItem('contacts'))){
        self.contacts = [];
    }else{
        self.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    
    
    this.onAddContact = function(form){
        
        self.contacts.push({name: self.person.name, phoneNumber: self.person.phoneNumber, email: self.person.email}); 
        localStorage.setItem('contacts',JSON.stringify(self.contacts));
        form.$setPristine();
        self.person = {};
    }
    
    this.onEdit = function(index){
        self.readMode = true;
        self.contactId = index;
        self.searchText = '';
        self.person = angular.copy(self.contacts[self.contactId]);
    }
    
    this.onUpdateContact = function(form){
        self.contacts = JSON.parse(localStorage.getItem('contacts'));
        self.contacts[self.contactId] = angular.copy(self.person);
        localStorage.setItem('contacts',JSON.stringify(self.contacts));
        self.readMode = false;
        self.updateMode = false;
        self.contactId = '';
        form.$setPristine();
        self.person = {};
    }
    
    this.onBack = function(form){
        self.readMode = false; 
        self.updateMode = false;
        form.$setPristine();
        self.person = {};
    } 
    
    this.onLogOut = function(){
        AuthenticationService.Logout();
    }
      
}]);