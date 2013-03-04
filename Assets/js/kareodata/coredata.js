/*	
Created by Abe Yang 1/18/2013
resources: 
	+ http://docs.angularjs.org/tutorial/step_02
	+ http://jsfiddle.net/colvint/tyx3m/
	+ services vs factory: http://jacobmumm.com/2012/08/28/angular-js-services/
*/

// http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
'use strict';

var app = angular.module('app', ['ui.bootstrap']);

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

	// make life easier by using ../dummy-json/index.html

	var data = [{"id":1,"pid":5,"first":"Baker","last":"Ramos","company":"Enlogia","email":"Baker.Ramos@Enlogia.com","phone":"888-455-345","address_1":"2355","address":"2355 Enlogia St.","city":"Two Rivers","state":"CA","zip":"21535","dob":"1969-05-08T11:30:04.677Z","ssn":"084-36-6647"},{"id":2,"pid":2,"first":"Dale","last":"Contreras","company":"Jamrola","email":"Dale.Contreras@Jamrola.com","phone":"818-050-346","address_1":"6100","address":"6100 Jamrola St.","city":"Plainfield","state":"CA","zip":"52822","dob":"1969-01-22T08:08:16.539Z","ssn":"081-38-6866"},{"id":3,"pid":7,"first":"Wallace","last":"Frederick","company":"Entcast","email":"Wallace.Frederick@Entcast.com","phone":"465-010-406","address_1":"8512","address":"8512 Entcast St.","city":"West Sacramento","state":"CA","zip":"56330","dob":"1969-12-25T00:36:23.346Z","ssn":"221-11-2508"},{"id":4,"pid":4,"first":"Sawyer","last":"Garrison","company":"Nanobanc","email":"Sawyer.Garrison@Nanobanc.com","phone":"325-323-607","address_1":"6245","address":"6245 Nanobanc St.","city":"Roswell","state":"CA","zip":"03463","dob":"1969-09-22T16:17:20.574Z","ssn":"685-42-4347"},{"id":5,"pid":3,"first":"Jamal","last":"Rasmussen","company":"Jamconik","email":"Jamal.Rasmussen@Jamconik.com","phone":"634-650-831","address_1":"8775","address":"8775 Jamconik St.","city":"Lewiston","state":"CA","zip":"16308","dob":"1968-03-16T01:12:53.048Z","ssn":"314-03-7622"},{"id":6,"pid":8,"first":"Neil","last":"Lee","company":"iEnland","email":"Neil.Lee@iEnland.com","phone":"812-341-325","address_1":"2837","address":"2837 iEnland St.","city":"New Kensington","state":"CA","zip":"76651","dob":"1968-02-11T03:07:14.409Z","ssn":"224-74-0523"},{"id":7,"pid":6,"first":"Zeus","last":"Kennedy","company":"Interliant","email":"Zeus.Kennedy@Interliant.com","phone":"670-053-403","address_1":"7574","address":"7574 Interliant St.","city":"Peekskill","state":"CA","zip":"67388","dob":"1969-04-07T04:17:00.562Z","ssn":"480-82-0645"},{"id":8,"pid":5,"first":"Thomas","last":"Weber","company":"Thermotomic","email":"Thomas.Weber@Thermotomic.com","phone":"461-571-240","address_1":"1363","address":"1363 Thermotomic St.","city":"Keene","state":"CA","zip":"08454","dob":"1968-06-01T17:10:33.759Z","ssn":"531-64-2704"},{"id":9,"pid":7,"first":"Baxter","last":"Mcconnell","company":"Fibrotouch","email":"Baxter.Mcconnell@Fibrotouch.com","phone":"188-311-780","address_1":"1185","address":"1185 Fibrotouch St.","city":"Simi Valley","state":"CA","zip":"67754","dob":"1968-06-16T20:57:55.184Z","ssn":"566-77-5507"},{"id":10,"pid":7,"first":"Jonas","last":"Orr","company":"Infraique","email":"Jonas.Orr@Infraique.com","phone":"827-424-520","address_1":"3712","address":"3712 Infraique St.","city":"Warner Robins","state":"CA","zip":"38122","dob":"1968-08-16T20:03:55.625Z","ssn":"260-17-8052"},{"id":11,"pid":8,"first":"Damon","last":"Suarez","company":"RoboAerlogix","email":"Damon.Suarez@RoboAerlogix.com","phone":"830-145-680","address_1":"1231","address":"1231 RoboAerlogix St.","city":"Hackensack","state":"CA","zip":"67064","dob":"1969-08-14T05:46:53.021Z","ssn":"356-17-3544"},{"id":12,"pid":8,"first":"Zephania","last":"Gibbs","company":"Titanirola","email":"Zephania.Gibbs@Titanirola.com","phone":"543-655-754","address_1":"0337","address":"0337 Titanirola St.","city":"Raleigh","state":"CA","zip":"08663","dob":"1968-02-26T10:27:52.918Z","ssn":"425-33-6308"},{"id":13,"pid":6,"first":"Finn","last":"Odonnell","company":"Teknoplexon","email":"Finn.Odonnell@Teknoplexon.com","phone":"522-475-564","address_1":"3216","address":"3216 Teknoplexon St.","city":"Saint Albans","state":"CA","zip":"43268","dob":"1968-11-03T13:52:01.815Z","ssn":"268-01-5822"},{"id":14,"pid":5,"first":"Brendan","last":"Arnold","company":"Netsystems","email":"Brendan.Arnold@Netsystems.com","phone":"823-120-388","address_1":"3878","address":"3878 Netsystems St.","city":"Carson City","state":"CA","zip":"64712","dob":"1968-03-29T06:40:36.296Z","ssn":"185-68-2575"},{"id":15,"pid":1,"first":"Nicholas","last":"Combs","company":"Safeagra","email":"Nicholas.Combs@Safeagra.com","phone":"418-550-201","address_1":"3161","address":"3161 Safeagra St.","city":"Yukon","state":"CA","zip":"11380","dob":"1969-10-24T18:29:13.656Z","ssn":"582-05-5741"},{"id":16,"pid":5,"first":"Justin","last":"Hall","company":"eSteganoergy","email":"Justin.Hall@eSteganoergy.com","phone":"858-886-466","address_1":"5880","address":"5880 eSteganoergy St.","city":"Scarborough","state":"CA","zip":"52535","dob":"1968-09-08T20:25:47.519Z","ssn":"554-52-4182"},{"id":17,"pid":7,"first":"Uriel","last":"Sweeney","company":"Unologic","email":"Uriel.Sweeney@Unologic.com","phone":"340-068-561","address_1":"4077","address":"4077 Unologic St.","city":"New Kensington","state":"CA","zip":"16001","dob":"1969-04-19T04:02:31.827Z","ssn":"108-63-2217"},{"id":18,"pid":4,"first":"Hakeem","last":"Mccarthy","company":"Genland","email":"Hakeem.Mccarthy@Genland.com","phone":"255-035-375","address_1":"5340","address":"5340 Genland St.","city":"Boulder City","state":"CA","zip":"47265","dob":"1969-04-11T00:08:33.360Z","ssn":"030-84-0100"},{"id":19,"pid":1,"first":"Stuart","last":"Banks","company":"Steganoconiche","email":"Stuart.Banks@Steganoconiche.com","phone":"701-408-001","address_1":"4255","address":"4255 Steganoconiche St.","city":"Houma","state":"CA","zip":"24546","dob":"1969-01-16T09:13:48.054Z","ssn":"240-05-3573"},{"id":20,"pid":8,"first":"Malik","last":"Shields","company":"Ameritron","email":"Malik.Shields@Ameritron.com","phone":"805-655-433","address_1":"1314","address":"1314 Ameritron St.","city":"Beaumont","state":"CA","zip":"15633","dob":"1968-12-04T07:23:16.741Z","ssn":"580-27-6886"},{"id":21,"pid":3,"first":"Ahmed","last":"Rasmussen","company":"Qualserve","email":"Ahmed.Rasmussen@Qualserve.com","phone":"028-388-523","address_1":"7576","address":"7576 Qualserve St.","city":"Lewiston","state":"CA","zip":"28023","dob":"1968-03-02T20:18:23.314Z","ssn":"417-65-1230"},{"id":22,"pid":2,"first":"Ezra","last":"Matthews","company":"Orthomedia","email":"Ezra.Matthews@Orthomedia.com","phone":"586-631-371","address_1":"5818","address":"5818 Orthomedia St.","city":"West Haven","state":"CA","zip":"00275","dob":"1968-07-12T07:14:05.014Z","ssn":"540-58-0080"},{"id":23,"pid":9,"first":"Joseph","last":"Bennett","company":"Interliant","email":"Joseph.Bennett@Interliant.com","phone":"024-574-776","address_1":"7432","address":"7432 Interliant St.","city":"Houma","state":"CA","zip":"86820","dob":"1969-09-18T20:00:11.899Z","ssn":"831-22-0350"},{"id":24,"pid":6,"first":"Tad","last":"Emerson","company":"Keytheon","email":"Tad.Emerson@Keytheon.com","phone":"062-170-623","address_1":"2112","address":"2112 Keytheon St.","city":"Greensboro","state":"CA","zip":"30128","dob":"1968-11-12T23:53:55.245Z","ssn":"052-06-3481"},{"id":25,"pid":7,"first":"Cruz","last":"Sweeney","company":"Fibroserve","email":"Cruz.Sweeney@Fibroserve.com","phone":"803-020-884","address_1":"5461","address":"5461 Fibroserve St.","city":"Two Rivers","state":"CA","zip":"76261","dob":"1969-01-06T03:03:10.631Z","ssn":"724-65-2836"},{"id":26,"pid":9,"first":"Brody","last":"Mclaughlin","company":"Techtron","email":"Brody.Mclaughlin@Techtron.com","phone":"822-071-600","address_1":"2854","address":"2854 Techtron St.","city":"Aguadilla","state":"CA","zip":"66780","dob":"1969-06-05T20:06:38.304Z","ssn":"217-25-1263"},{"id":27,"pid":7,"first":"Evan","last":"Contreras","company":"Allnet","email":"Evan.Contreras@Allnet.com","phone":"780-234-610","address_1":"6517","address":"6517 Allnet St.","city":"Half Moon Bay","state":"CA","zip":"15168","dob":"1969-08-25T20:42:05.199Z","ssn":"476-14-6500"},{"id":28,"pid":3,"first":"Theodore","last":"Frye","company":"iMedconik","email":"Theodore.Frye@iMedconik.com","phone":"450-477-302","address_1":"8788","address":"8788 iMedconik St.","city":"Yakima","state":"CA","zip":"83406","dob":"1969-03-19T19:12:43.804Z","ssn":"120-12-7265"},{"id":29,"pid":1,"first":"Melvin","last":"Roach","company":"Truegate","email":"Melvin.Roach@Truegate.com","phone":"671-777-588","address_1":"4413","address":"4413 Truegate St.","city":"Lewiston","state":"CA","zip":"11155","dob":"1969-12-20T17:45:53.936Z","ssn":"110-25-8756"},{"id":30,"pid":7,"first":"Malachi","last":"Frederick","company":"Xeicon","email":"Malachi.Frederick@Xeicon.com","phone":"107-306-336","address_1":"7447","address":"7447 Xeicon St.","city":"Troy","state":"CA","zip":"08068","dob":"1968-04-02T21:52:36.239Z","ssn":"415-37-2215"},{"id":31,"pid":1,"first":"Benjamin","last":"Harding","company":"Teraserv","email":"Benjamin.Harding@Teraserv.com","phone":"161-442-126","address_1":"8271","address":"8271 Teraserv St.","city":"Norman","state":"CA","zip":"52773","dob":"1969-02-25T09:06:21.563Z","ssn":"421-08-1451"},{"id":32,"pid":3,"first":"Kenyon","last":"Mcclain","company":"Safetrust","email":"Kenyon.Mcclain@Safetrust.com","phone":"025-873-817","address_1":"5576","address":"5576 Safetrust St.","city":"Woburn","state":"CA","zip":"28177","dob":"1969-11-21T20:06:46.875Z","ssn":"552-65-8251"},{"id":33,"pid":5,"first":"Emery","last":"Terrell","company":"InfoAirway","email":"Emery.Terrell@InfoAirway.com","phone":"087-483-830","address_1":"5440","address":"5440 InfoAirway St.","city":"Texarkana","state":"CA","zip":"51848","dob":"1969-07-29T10:54:17.100Z","ssn":"418-23-2534"},{"id":34,"pid":8,"first":"Charles","last":"Hays","company":"Idmax","email":"Charles.Hays@Idmax.com","phone":"820-071-502","address_1":"8188","address":"8188 Idmax St.","city":"Meridian","state":"CA","zip":"55002","dob":"1969-09-06T07:49:28.784Z","ssn":"542-46-6736"},{"id":35,"pid":9,"first":"Theodore","last":"Howard","company":"Vencom","email":"Theodore.Howard@Vencom.com","phone":"403-436-087","address_1":"3163","address":"3163 Vencom St.","city":"Blacksburg","state":"CA","zip":"08284","dob":"1969-07-03T00:27:37.751Z","ssn":"506-15-4770"}];
		
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

	var data = [{"id":1,"aid":5,"company":"Ameritron","name":"Ameritron Practice","address_1":"5641","address":"5641 Ameritron St.","city":"Yukon","state":"CA","zip":"86107"},{"id":2,"aid":2,"company":"Orthosoft","name":"Orthosoft Practice","address_1":"6176","address":"6176 Orthosoft St.","city":"Carbondale","state":"CA","zip":"82673"},{"id":3,"aid":2,"company":"Interliant","name":"Interliant Practice","address_1":"1531","address":"1531 Interliant St.","city":"Monongahela","state":"CA","zip":"24301"},{"id":4,"aid":3,"company":"Openserve","name":"Openserve Practice","address_1":"1248","address":"1248 Openserve St.","city":"Plymouth","state":"CA","zip":"00281"},{"id":5,"aid":5,"company":"Titanirola","name":"Titanirola Practice","address_1":"1010","address":"1010 Titanirola St.","city":"Longview","state":"CA","zip":"66754"},{"id":6,"aid":1,"company":"Fibrotouch","name":"Fibrotouch Practice","address_1":"5501","address":"5501 Fibrotouch St.","city":"Plainfield","state":"CA","zip":"13668"},{"id":7,"aid":3,"company":"Ameritron","name":"Ameritron Practice","address_1":"1240","address":"1240 Ameritron St.","city":"Wausau","state":"CA","zip":"68435"},{"id":8,"aid":1,"company":"Westmedia","name":"Westmedia Practice","address_1":"5246","address":"5246 Westmedia St.","city":"Beaumont","state":"CA","zip":"14532"},{"id":9,"aid":1,"company":"iQualcar","name":"iQualcar Practice","address_1":"4837","address":"4837 iQualcar St.","city":"Nacogdoches","state":"CA","zip":"28226"},{"id":10,"aid":5,"company":"Anagraph","name":"Anagraph Practice","address_1":"8127","address":"8127 Anagraph St.","city":"Reedsport","state":"CA","zip":"57312"}];
		
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

app.factory('accountResource', function () {

	var data = [{"id":1,"name":"Davenport Medical Clinic, LLC"},
	{"id":2,"name":"Paul C. Pearson, DPM, PA"},
	{"id":3,"name":"TotalLifeMD"},
	{"id":4,"name":"Robert Osheroff, DPM"},
	{"id":5,"name":"Grace Szenkiel, MD"}];
	
	return {
		list: function() {
			return data;
		},
		findById: function(id) {
            return _.find(data, function (a) {
                return a.id == id;
            });
        }
	}
});