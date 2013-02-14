/*	
Created by Abe Yang 1/18/2013
resources: 
	+ http://docs.angularjs.org/tutorial/step_02
	+ http://jsfiddle.net/colvint/tyx3m/
	+ services vs factory: http://jacobmumm.com/2012/08/28/angular-js-services/
*/

// http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
'use strict';

var app = angular.module('app', []);

// CONTROLLERS

app.controller('contactListController', function($scope, contactResource) {
	
	$scope.contacts = contactResource.list();
	
	$scope.getFullName = function(contact) {
		return contact.first + ' ' + contact.last;
	}

}); // end contactListController

app.controller('providerListController', function($scope, contactResource, providerResource, practiceResource) {
	
	$scope.providers = providerResource.list();
	$scope.p = 0;		// model
	
	$scope.thisuser = 'Mike Su';
	$scope.firstrow = 'highlightForActive';
	
	$scope.getName = function(provider) {
		var contact = contactResource.findById(provider.id);
		var name = contact.first + ' ' + contact.last;
		if (provider.suffix) name += ', ' + provider.suffix;
		return name;
	}
	
	$scope.getSelected = function() {
		// get list of checked providers
		var list = _.filter($scope.providers, function($p) {
			return ($p.checked == 'highlightForActive');
		});
		
/* 		return _.each(list, $scope.getName); */
		return list;
	}
	
		$scope.practices = practiceResource.list();


}); // end providerListController


// RESOURCES

app.factory('contactResource', function () {

	// make life easier by using http://www.jsoneditoronline.org/

	var data = [
		{
	    	"id": 1,
	        "first": "Abe",
	        "last": "Yang",
	        "email": "abe.yang@kareo.com",
	        "phone": "951-123-4567",
	        "address": "5200 Chicago Ave, Apt F12",
	        "city": "Riverside",
	        "state": "CA",
	        "zip": 92507,
	        "dob": "1983-04-16",
	        "ssn": "555-55-5555"
	    },
	    {
	        "id": 2,
	        "first": "Mitch",
	        "last": "Malone",
	        "email": "mitch.malone@kareo.com",
	        "phone": "650-123-4567",
	        "address": "123 Fake St",
	        "city": "Irvine",
	        "state": "CA",
	        "zip": 92617,
	        "dob": "1985-01-23",
	        "ssn": "321-54-0987"
	    },
	    {
	        "id": 3,
	        "first": "Peter",
	        "last": "Venkman",
	        "email": "pvenkman@gmail.com",
	        "phone": "123-456-7890",
	        "address": "5353 Honest St",
	        "city": "Irvine",
	        "state": "CA",
	        "zip": 92617,
	        "dob": "1964-05-21",
	        "ssn": "154-098-1237"
	    },
	    {
	        "id": 4,
	        "first": "Jason",
	        "last": "Leu",
	        "email": "jason.leu@kareo.com",
	        "phone": "123-456-7890",
	        "address": "2 Irvine Spectrum",
	        "city": "Irvine",
	        "state": "CA",
	        "zip": 92617,
	        "dob": "1978-12-21",
	        "ssn": "398-256-5137"
	    }
	];
	
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function (contact) {
                return contact.id == id;
            });
        }
	}
});

app.factory('providerResource', function () {

	var data = [
		{
	    	"id": 1,
	        "suffix": "Ph.D.",
	        "npi": "123456789",
	        "taxonomy": "1234 - Physician"
	    },
	    {
	        "id": 2,
	        "suffix": "M.D.",
	        "npi": "907856342",
	        "taxonomy": "5310 - Doctor"
	    },
	    {
	        "id": 3,
	        "suffix": "M.D.",
	        "npi": "718293045",
	        "taxonomy": "1234 - Physician"
	    },
	    {
	        "id": 4,
	        "suffix": "",
	        "npi": "403928176",
	        "taxonomy": "2167 - Surgeon"
	    }
	];
	
	return {
		list: function() {
			return data;
		}
	}
});

app.factory('practiceResource', function () {

	var data = [
		{
	    	"id": 1,
	        "name": "American Medical Associates",
	        "address": "5200 Chicago Ave, Apt F12",
	        "city": "Riverside",
	        "state": "CA",
	        "zip": 92507

	    },
	    {
	        "id": 2,
	        "name": "Cardiovascular Practitioners",
	        "address": "123 Fake St",
	        "city": "Irvine",
	        "state": "CA",
	        "zip": 92617
	    },
	    {
	        "id": 3,
	        "name": "Physicians' Guild",
	        "address": "345 East Ohio Street",
	        "city": "Chicago",
	        "state": "IL",
	        "zip": 60611
	    },
	    {
	        "id": 4,
	        "name": "Taiwanese Medicine",
	        "address": "9090 Winlock Rd",
	        "city": "Torrance",
	        "state": "CA",
	        "zip": 90505
	    },
	    {
	        "id": 5,
	        "name": "The Really, Really Long Name that Takes Up a lot of Space",
	        "address": "54321 Long Address, P.O. Box 12345",
	        "city": "Torrance",
	        "state": "CA",
	        "zip": 90505
	    },
	    {
	        "id": 6,
	        "name": "Under the C Section",
	        "address": "2440 Dana St",
	        "city": "Berkeley",
	        "state": "CA",
	        "zip": 94704
	    }
	];
	
	return {
		list: function() {
			return data;
		}
	}
});