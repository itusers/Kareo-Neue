/*	
Created by Abe Yang 8/1/2013

	Legend:
	+ cid = contact (patient) id
	+ eid = encounter id
*/

// =========================================================================================================
//
// ANGULAR MAGIC
//
// =========================================================================================================
'use strict';

var app = angular.module('app', []);

// ROUTERS

// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//       when('/tasks', {templateUrl: 'partials/task-list.html', controller: 'TaskListController'}).
// 	  when('/tasks/new', {templateUrl: 'partials/task-new.html', controller: 'TaskListController'}).
//       when('/tasks/:taskId', {templateUrl: 'partials/task-detail.html', controller: 'TaskListController'}).
//       otherwise({redirectTo: '/tasks'});
// }]);

// CONTROLLERS

/* 	Claim Denials Overview controller */

app.controller('DenialsListController', function($scope, practiceResource, insuranceResource, remarkResource) {

	$scope.remarks = remarkResource.list();		// this needs to be clusters
	$scope.insurances = insuranceResource.list();
	$scope.practices = practiceResource.list();
});

/* 	Denial Claim controller */

app.controller('DenialController', function($scope, patientResource) {

	// global vars
	$scope.deadline = 90;

	$scope.patients = patientResource.list();

	$scope.selectTag = function(text, classname) {
		return '<span class="' + classname + '">' + text + '</span>';
		// if (classname == null) classname = 'btn-warning';
		// return '<button type="button" class="btn dropdown-toggle ' + classname + '" data-toggle="dropdown">' + text + ' <i class="icon-angle-down"></i></button>';
	}

	$scope.tag1 = $scope.selectTag('Awaiting EOB');
	$scope.tag2 = $scope.selectTag('Importance', 'title');

	// transforms YYYYMMDD => M/D/YYYY
	$scope.prettydate = function(date) {
		return moment(date, 'YYYYMMDD').format('l')
	}

	// shows duration (in days) between two dates (YYYYMMDD format)
	$scope.duration = function(date1, date2) {
		var a = moment(date1, 'YYYYMMDD');
		var b = moment(date2, 'YYYYMMDD');
		return a.diff(b, 'days');
	}

	$scope.deadlinefromdate = function(date) {
		return moment(date, 'YYYYMMDD').add('days',this.deadline).format('l')
	}
});

// FACTORIES

app.factory('patientResource', function () {

	// make life easier by using ../dummy-json/index.html

	var data = [
		{id:1,first:"Stacey",last:"Davis",gender:'female',dob:"19800520",ssn:"552-455-3451",policy:"HLFAN156832",group:"002230001",practice_id:5,provider_id:1,lifecycle_id:1,dos:"20130703",address:"1234 Fake St., Irvine, CA 92602"},
		{id:2,first:"Gregorio",last:"Harris",gender:'male',dob:"19770323",ssn:"455-345-1099",policy:"FACIL156832",group:"002230001",practice_id:5,provider_id:1,lifecycle_id:1,dos:"20130623",address:"1234 Fake St., Irvine, CA 92602"},
		{id:3,first:"Nichelle",last:"Truong",gender:'female',dob:"19800520",ssn:"552-455-3451",policy:"HLFAN156832",group:"002230001",practice_id:5,provider_id:1,lifecycle_id:1,dos:"20121107",address:"1234 Fake St., Irvine, CA 92602"},
		{id:4,first:"Terry",last:"Toner",gender:'male',dob:"19560605",ssn:"345-123-8765",policy:"LOFAL231568",group:"226630001",practice_id:5,provider_id:1,lifecycle_id:1,dos:"20130723",address:"1234 Fake St., Irvine, CA 92602"}
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
	    	id: 1,
	        "suffix": "Ph.D.",
	        "npi": "123456789",
	        "taxonomy": "1234 - Physician"
	    },
	    {
	        id: 2,
	        "suffix": "M.D.",
	        "npi": "907856342",
	        "taxonomy": "5310 - Doctor"
	    },
	    {
	        id: 3,
	        "suffix": "M.D.",
	        "npi": "718293045",
	        "taxonomy": "1234 - Physician"
	    },
	    {
	        id: 4,
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

	var data = [{id:1,"aid":5,"company":"Davenport",name:"Davenport Medical Clinic","address_1":"5641","address":"5641 Ameritron St.","city":"Yukon","state":"CA","zip":"86107"},{id:2,"aid":2,"company":"Orthosoft",name:"Orthosoft Practice","address_1":"6176","address":"6176 Orthosoft St.","city":"Carbondale","state":"CA","zip":"82673"},{id:3,"aid":2,"company":"Interliant",name:"Interliant Clinic","address_1":"1531","address":"1531 Interliant St.","city":"Monongahela","state":"CA","zip":"24301"},{id:4,"aid":3,"company":"Openserve",name:"Openserve Practice","address_1":"1248","address":"1248 Openserve St.","city":"Plymouth","state":"CA","zip":"00281"},{id:5,"aid":5,"company":"Titanirola",name:"Titanirola Medical Clinic","address_1":"1010","address":"1010 Titanirola St.","city":"Longview","state":"CA","zip":"66754"},{id:6,"aid":1,"company":"Fibrotouch",name:"Fibrotouch Practice","address_1":"5501","address":"5501 Fibrotouch St.","city":"Plainfield","state":"CA","zip":"13668"},{id:7,"aid":3,"company":"Ameritron",name:"Ameritron Practice","address_1":"1240","address":"1240 Ameritron St.","city":"Wausau","state":"CA","zip":"68435"}];
		
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function (p) {
                return p.id == id;
            });
        }
	}
});

app.factory('insuranceResource', function () {

	var data = [
		{id:1,name:"Aetna Health",phone:"1-800-123-4456"},
		{id:2,name:"Medicare",phone:"1-800-445-6789"},
		{id:3,name:"American Family Insurance",phone:"1-800-987-6543"},
		{id:4,name:"Kaiser Permanente",phone:"1-800-101-1100"},
		{id:5,name:"United Health Group",phone:"1-800-416-0623"}];
	
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function(i) {
                return i.id == id;
            });
        }
	}
});

app.factory('remarkResource', function () {

	// http://www.wpc-edi.com/reference/codelists/healthcare/remittance-advice-remark-codes/

	var data = [
		{id:1,code:"CO-140",desc:"Patient/Insured health identification number and name do not match.",amount:"$5000",enc:120},
		{id:2,code:"MA-130",desc:"Our claim contains incomplete and/or invalid information, and no appeal rights are afforded because the claim is unprocessable.",amount:"$4200",enc:147},
		{id:3,code:"MA-61",desc:"Missing/incomplete/invalid social security number or health insurance claim number",amount:"$3600",enc:92},
		{id:4,code:"MA-25",desc:"A patient may not elect to change a hospice provider more than once in a benefit period.",amount:"$2100",enc:78},
		{id:5,code:"MA-19",desc:"Information was not sent to the Medigap insurer due to incorrect/invalid information you submitted concerning that insurer. Please verify your information and submit your secondary claim directly to that insurer.",amount:"$1450",enc:64},
		{id:6,code:"N-170",desc:"A new/revised/renewed certificate of medical necessity is needed",amount:"$1200",enc:114},
		{id:7,code:"N-591",desc:"Payment based on an Independent Medical Examination (IME) or Utilization Review (UR)",amount:"$800",enc:35},
		{id:8,code:"M-32",desc:"This is a conditional payment made pending a decision on this service by the patient's primary payer. This payment may be subject to refund upon your receipt of any additional payment for this service from another payer. You must contact this office immediately upon receipt of an additional payment for this service.",amount:"$650",enc:12},
		{id:9,code:"M-60",desc:"Missing Certificate of Medical Necessity",amount:"$550",enc:16},
		{id:10,code:"CO-16",desc:"Claim/service lacks information which is needed for adjudication. Additional information is supplied using remittance advice remarks codes whenever appropriate.",amount:"$510",enc:23},
		{id:11,code:"N-324",desc:"Missing/incomplete/invalid last seen/visit date.",amount:"$475",enc:31},
		{id:12,code:"N-286",desc:"Missing/incomplete/invalid referring provider primary identifier.",amount:"$425",enc:10}]
	
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function(r) {
                return r.id == id;
            });
        }
	}
});

/* Biller data */

app.factory('billersResource', function () {

	var data = [{id:1,"first":"Armine","last":"Manukian","avatar":"http://uifaces.com/faces/michelle_120.jpg"},
	{id:2,"first":"Briana","last":"Kawaihae", "avatar":"http://uifaces.com/faces/renee_120.jpg"},
	{id:3,"first":"Jonathan","last":"Morillo","avatar":"http://uifaces.com/faces/_twitter/ryanAmurphy_120.jpg"},
	{id:4,"first":"Valentine","last":"Grimes"},{id:5,"first":"Mannix","last":"Vincent"},{id:6,"first":"Sawyer","last":"Walls"},{id:7,"first":"Finn","last":"Lynn"},{id:8,"first":"Calvin","last":"Frank"},{id:9,"first":"Ferris","last":"Mendez"},{id:10,"first":"Herman","last":"Abbott"}];
	
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function (b) {
                return b.id == id;
            });
        }
	}
});

// =========================================================================================================
//
// JQUERY
//
// =========================================================================================================

$(document).ready(function() {
	// overall denials view

	$('.panel-heading').click(function() {
		var panel = $(this).parent();
		if (panel.hasClass('open')) {
			panel.removeClass('open');
			if ($('#overview').length) panel.removeClass('panel-info');
		}
		else {
			panel.addClass('open');
			if ($('#overview').length) panel.addClass('panel-info');
		}
	});

	// fake clicking on a link
	$('.list-group-item').click(function() {
		window.location.href = 'denialclaim.php';
	});

	// denials claim view

	$('.lifecycle i').tooltip({html: true});

	$('.action').click(function(e) {
		e.preventDefault();
		var btn = $(this);
		var id = btn.attr('id');
		var stamp = $('.current .stamp-' + id);
		var patient = stamp.parent();
		
		// massive chaining: 
		// show relevant stamp -> delay -> swipe current patient away + show next patient 
		// -> swap meta info (provider + practice)
		stamp.show().addClass('animated bounceIn').delay(700).queue(function(nxt) {
			patient.addClass('animated fadeOutLeft');
			$('#currentcount').html(parseInt($('#currentcount').html()) - 1);	// -1 current counter based on action
			nxt();
		}).delay(300).queue(function(nxt) {
			patient.removeClass('current').parent().next().children().addClass('animated fadeInRight current');
			nxt();
		});
	});

});

