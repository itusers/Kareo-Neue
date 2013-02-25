/*	
Created by Abe Yang 2/25/2013
Should be used inconjunction with coredata.js

	Legend:
	+ cid = contact id
	+ eid = encounter id
*/

'use strict';

// ROUTERS

// ...

// CONTROLLERS

/* lifecycle controller */

app.controller('lifecycleController', function($scope, contactResource, providerResource, encountersResource, claimsResource) {
	
	$scope.providers = providerResource.list();
	$scope.eid = 4185;		// current encounter id
		
	$scope.encounter = encountersResource.findById($scope.eid); 
	$scope.claims = claimsResource.filterByEid($scope.eid);

}); // end providerListController

// FACTORIES

// make life easier by using http://www.jsoneditoronline.org/

/* Appointment + Encounter: using the same factory for both (cutting corners, I know) */

app.factory('encountersResource', function () {

	var data = [
		{
			"id": 4185,
	    	"cid": 5,
	        "date": "2013-01-13",
	        "time_start": "8:00",
	        "time_end": "8:30",
	        "location": "Oakland Office",
	        "provider_id": 1,
	        "reasons": "...",		// need to revisit this
	        
	        "case": "Standard",
	        "prior": "None",
	        "primary_insurance": "Aetna",
	        "primary_billas": "Professional (CMS-1500)",
	        "secondary_insurance": "Kaiser",
	        "secondary_billas": "Professional (CMS-1500)"
	    }

	];
	
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function (enc) {
                return enc.id == id;
            });
        }
	}
});

/* Claims + Procedures: using the same factory for both (cutting corners, I know) */

app.factory('claimsResource', function () {

	var data = [
		{
			"id": 1,
	    	"eid": 4185,
	        "code": "720.4",
	        "desc": "Debridement, extensive eczematous/infectious skin diseases",
	        "date": "2013-01-13",
	        "amount": "$500.00"
	    },
	    {
			"id": 2,
	    	"eid": 4185,
	        "code": "801.50",
	        "desc": "Cerebral perfusion analysis, CT w/contrasting slides",
	        "date": "2013-01-13",
	        "amount": "$256.00"
	    },
	    {
			"id": 3,
	    	"eid": 4185,
	        "code": "360.0",
	        "desc": "Full body scan, determ cerebral blood flow, scan in the arm",
	        "date": "2013-01-14",
	        "amount": "$312.00"
	    },
	    {
			"id": 4,
	    	"eid": 4185,
	        "code": "18.2",
	        "desc": "Extensive eczematous/infected skin; past the epidermis",
	        "date": "2013-01-14",
	        "amount": "$56.00"
	    },
	    {
			"id": 5,
	    	"eid": 5123,
	        "code": "20.8",
	        "desc": "Most disgusting thing you've ever seen",
	        "date": "2013-02-23",
	        "amount": "$223.50"
	    }
	];
	
	return {
		list: function() {
			return data;
		},
		filterByEid: function(eid) {
            return _.filter(data, function (claim) {
                return claim.eid == eid;
            });
        }
	}
});