/*	
Created by Abe Yang 2/25/2013
Should be used inconjunction with coredata.js

	Legend:
	+ cid = contact (patient) id
	+ eid = encounter id
*/

'use strict';

// ROUTERS

// ...

// CONTROLLERS

/* RCM controller */

app.controller('rcmController', function($scope, contactResource, practiceResource, accountResource, encountersResource, billersResource) {
	
	$scope.encounters = encountersResource.list();
	
	$scope.getContact = function(encounter) {
		var contact = contactResource.findById(encounter.cid);
		return contact.first + ' ' + contact.last;
	}

}); // end providerListController

// FACTORIES

// make life easier by using http://www.jsoneditoronline.org/

/* Encounter data */

app.factory('encountersResource', function () {

	var data = [{"id":1,"bid":9,"cid":6,"amount":3280,"date_created":"2013-12-22T15:47:45.803Z","date_updated":"2014-01-08T07:22:51.500Z","comments":5,"status":1},{"id":2,"bid":5,"cid":21,"amount":2418,"date_created":"2012-05-23T13:52:31.904Z","date_updated":"2013-01-06T06:20:34.329Z","comments":5,"status":3},{"id":3,"bid":10,"cid":27,"amount":3755,"date_created":"2011-10-03T20:56:36.193Z","date_updated":"2011-10-19T16:48:31.879Z","comments":0,"status":0},{"id":4,"bid":9,"cid":26,"amount":1003,"date_created":"2011-01-08T04:17:39.562Z","date_updated":"2011-03-01T20:23:30.206Z","comments":1,"status":4},{"id":5,"bid":1,"cid":10,"amount":3963,"date_created":"2012-04-27T06:08:29.941Z","date_updated":"2012-08-19T02:25:07.436Z","comments":3,"status":1},{"id":6,"bid":8,"cid":34,"amount":3306,"date_created":"2011-03-08T03:52:27.480Z","date_updated":"2011-03-26T15:16:17.065Z","comments":3,"status":7},{"id":7,"bid":8,"cid":31,"amount":1630,"date_created":"2012-10-23T07:37:39.671Z","date_updated":"2012-12-24T04:41:32.826Z","comments":3,"status":8},{"id":8,"bid":6,"cid":19,"amount":2984,"date_created":"2011-02-17T17:51:47.204Z","date_updated":"2011-10-24T16:59:32.584Z","comments":5,"status":7},{"id":9,"bid":6,"cid":33,"amount":587,"date_created":"2014-01-12T01:49:25.486Z","date_updated":"2014-09-22T13:36:55.902Z","comments":4,"status":9},{"id":10,"bid":2,"cid":7,"amount":895,"date_created":"2011-06-15T14:19:49.370Z","date_updated":"2011-11-12T02:51:13.043Z","comments":3,"status":3},{"id":11,"bid":3,"cid":6,"amount":1462,"date_created":"2013-03-24T14:12:13.667Z","date_updated":"2013-12-06T21:48:04.271Z","comments":3,"status":5},{"id":12,"bid":3,"cid":28,"amount":2090,"date_created":"2011-03-17T15:07:27.891Z","date_updated":"2011-11-10T01:54:58.089Z","comments":3,"status":4},{"id":13,"bid":5,"cid":20,"amount":3193,"date_created":"2012-02-03T19:37:58.196Z","date_updated":"2012-06-22T14:55:39.512Z","comments":0,"status":7},{"id":14,"bid":6,"cid":11,"amount":1494,"date_created":"2011-05-13T06:41:41.517Z","date_updated":"2011-07-21T06:36:01.279Z","comments":4,"status":2},{"id":15,"bid":8,"cid":8,"amount":3666,"date_created":"2014-01-13T08:13:32.138Z","date_updated":"2014-12-16T07:30:07.022Z","comments":3,"status":4},{"id":16,"bid":1,"cid":7,"amount":1909,"date_created":"2013-05-07T23:30:53.666Z","date_updated":"2013-09-07T17:37:53.542Z","comments":5,"status":7},{"id":17,"bid":1,"cid":21,"amount":2556,"date_created":"2011-07-27T05:41:14.223Z","date_updated":"2011-08-10T21:33:17.466Z","comments":2,"status":7},{"id":18,"bid":4,"cid":14,"amount":3,"date_created":"2011-02-24T03:58:55.542Z","date_updated":"2011-06-22T07:20:01.995Z","comments":2,"status":7},{"id":19,"bid":10,"cid":21,"amount":2296,"date_created":"2011-01-23T14:27:52.201Z","date_updated":"2011-02-28T22:59:39.464Z","comments":1,"status":10},{"id":20,"bid":7,"cid":13,"amount":876,"date_created":"2011-11-25T08:27:01.518Z","date_updated":"2011-12-04T17:49:26.302Z","comments":1,"status":2},{"id":21,"bid":2,"cid":35,"amount":125,"date_created":"2013-12-15T09:56:35.225Z","date_updated":"2014-01-01T21:30:10.234Z","comments":0,"status":6},{"id":22,"bid":8,"cid":21,"amount":3765,"date_created":"2013-02-14T10:09:28.941Z","date_updated":"2013-12-11T10:22:55.197Z","comments":4,"status":7},{"id":23,"bid":3,"cid":18,"amount":3251,"date_created":"2013-09-08T06:46:20.858Z","date_updated":"2013-10-14T18:35:03.234Z","comments":0,"status":4},{"id":24,"bid":4,"cid":3,"amount":615,"date_created":"2011-10-01T12:47:03.117Z","date_updated":"2011-12-10T14:43:16.300Z","comments":5,"status":4},{"id":25,"bid":6,"cid":18,"amount":1765,"date_created":"2011-04-27T00:16:32.246Z","date_updated":"2011-12-11T03:25:12.465Z","comments":4,"status":4},{"id":26,"bid":9,"cid":22,"amount":1740,"date_created":"2013-01-12T07:56:21.508Z","date_updated":"2013-05-26T22:53:09.091Z","comments":5,"status":4},{"id":27,"bid":1,"cid":2,"amount":2189,"date_created":"2012-02-19T08:08:16.263Z","date_updated":"2012-09-16T12:37:21.911Z","comments":0,"status":2},{"id":28,"bid":7,"cid":30,"amount":881,"date_created":"2012-09-27T01:35:21.451Z","date_updated":"2012-12-02T04:35:50.273Z","comments":4,"status":1},{"id":29,"bid":6,"cid":18,"amount":3944,"date_created":"2011-08-14T13:48:55.681Z","date_updated":"2011-09-23T20:59:17.847Z","comments":1,"status":0},{"id":30,"bid":5,"cid":27,"amount":1238,"date_created":"2011-02-19T10:31:41.247Z","date_updated":"2011-04-28T23:19:46.435Z","comments":0,"status":7},{"id":31,"bid":10,"cid":26,"amount":470,"date_created":"2011-09-28T04:44:58.359Z","date_updated":"2011-11-26T10:40:42.846Z","comments":2,"status":8},{"id":32,"bid":4,"cid":18,"amount":3218,"date_created":"2012-11-23T15:46:01.693Z","date_updated":"2012-11-30T04:15:07.196Z","comments":3,"status":3},{"id":33,"bid":10,"cid":25,"amount":412,"date_created":"2013-02-20T22:48:01.224Z","date_updated":"2013-06-02T17:23:53.809Z","comments":4,"status":5},{"id":34,"bid":3,"cid":2,"amount":3064,"date_created":"2011-05-02T13:15:55.675Z","date_updated":"2011-06-26T11:15:54.951Z","comments":3,"status":10},{"id":35,"bid":3,"cid":8,"amount":3651,"date_created":"2011-02-17T23:37:58.337Z","date_updated":"2011-09-13T04:41:33.295Z","comments":0,"status":3},{"id":36,"bid":9,"cid":13,"amount":3879,"date_created":"2012-11-19T23:05:12.865Z","date_updated":"2013-01-15T02:19:37.857Z","comments":2,"status":2},{"id":37,"bid":6,"cid":1,"amount":1846,"date_created":"2013-11-01T23:00:53.487Z","date_updated":"2013-12-03T07:43:49.999Z","comments":0,"status":4},{"id":38,"bid":3,"cid":23,"amount":3037,"date_created":"2011-06-18T03:44:58.464Z","date_updated":"2011-07-03T04:00:50.910Z","comments":3,"status":6},{"id":39,"bid":4,"cid":20,"amount":199,"date_created":"2011-02-22T12:31:00.437Z","date_updated":"2011-05-17T07:02:42.059Z","comments":1,"status":2},{"id":40,"bid":2,"cid":19,"amount":1852,"date_created":"2013-09-14T10:37:33.211Z","date_updated":"2013-10-19T09:51:07.109Z","comments":4,"status":3},{"id":41,"bid":9,"cid":5,"amount":130,"date_created":"2011-08-28T21:27:40.278Z","date_updated":"2012-01-02T08:35:41.592Z","comments":3,"status":7},{"id":42,"bid":7,"cid":7,"amount":3851,"date_created":"2011-08-15T21:43:11.181Z","date_updated":"2011-11-30T03:08:53.112Z","comments":0,"status":1},{"id":43,"bid":6,"cid":25,"amount":171,"date_created":"2012-10-07T20:36:53.304Z","date_updated":"2012-10-15T04:42:33.331Z","comments":1,"status":0},{"id":44,"bid":4,"cid":10,"amount":1514,"date_created":"2012-03-29T15:44:10.088Z","date_updated":"2012-07-20T22:36:59.042Z","comments":3,"status":10},{"id":45,"bid":4,"cid":28,"amount":1761,"date_created":"2012-02-09T10:34:05.892Z","date_updated":"2012-06-28T04:43:50.796Z","comments":2,"status":5},{"id":46,"bid":7,"cid":13,"amount":125,"date_created":"2012-05-04T19:04:12.784Z","date_updated":"2013-01-08T17:51:12.086Z","comments":3,"status":10},{"id":47,"bid":7,"cid":7,"amount":2752,"date_created":"2011-05-11T01:12:21.385Z","date_updated":"2011-10-02T16:03:14.623Z","comments":4,"status":5},{"id":48,"bid":8,"cid":26,"amount":576,"date_created":"2013-02-17T14:07:20.783Z","date_updated":"2013-07-23T12:14:41.779Z","comments":2,"status":10},{"id":49,"bid":7,"cid":23,"amount":792,"date_created":"2012-10-24T10:03:39.202Z","date_updated":"2013-01-20T17:58:47.262Z","comments":3,"status":10},{"id":50,"bid":2,"cid":33,"amount":3201,"date_created":"2011-10-04T20:27:02.505Z","date_updated":"2012-01-29T18:33:03.659Z","comments":5,"status":9}];
	
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

/* Biller data */

app.factory('billersResource', function () {

	var data = [{"id":1,"first":"Elton","last":"Pace"},{"id":2,"first":"Louis","last":"Richards"},{"id":3,"first":"Reese","last":"Frank"},{"id":4,"first":"Valentine","last":"Grimes"},{"id":5,"first":"Mannix","last":"Vincent"},{"id":6,"first":"Sawyer","last":"Walls"},{"id":7,"first":"Finn","last":"Lynn"},{"id":8,"first":"Calvin","last":"Frank"},{"id":9,"first":"Ferris","last":"Mendez"},{"id":10,"first":"Herman","last":"Abbott"}];
	
	return {
		list: function() {
			return data;
		}
	}
});

