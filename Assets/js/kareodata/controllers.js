// Created by Abe Yang 1/18/2013
// based off of http://docs.angularjs.org/tutorial/step_02
// make life easier by using http://www.jsoneditoronline.org/

function ContactListCtrl($scope) {
	$scope.contacts = [
	    {
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
	    }
	];
}