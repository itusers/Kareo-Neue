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

/* Tasks controller */

app.controller('tasksController', function($scope, contactResource, practiceResource, accountResource, billersResource, tasksResource) {

	$scope.current_biller = billersResource.findById(3);;
	$scope.active_tasks = 'active';			// highlight navbar
	
	$scope.filterCriteria = {
		bid: ''
	};
	
	$scope.tasks_open = tasksResource.filterByStatus(0);
	$scope.tasks_closed = tasksResource.filterByStatus(1);
	$scope.tasks_deleted = tasksResource.filterByStatus(-1);
	
	$scope.getAvatar = function(task) {
        var b = billersResource.findById(task.bid);
        if (b.avatar) return '<img src="' + b.avatar + '" />';
        else return '<div>' + b.first.substring(0,1) + b.last.substring(0,1) + '</div>';
    }
	
	$scope.getComments = function(task) {
		if (task.comments) return '<span class="label label-comment"><span class="entypo">&#59160;</span> ' + task.comments + '</span>';
	}
	
	$scope.getDaysDue = function(task) {
		var output;
		if (task.days_due >= -2 && task.days_due <= 3) {
			if (task.days_due > 0) return '<span class="label label-duedate">Due in ' + pluralize(task.days_due, 'day') + '</span>';
			else if (task.days_due == 0) return '<span class="label label-duetoday">Due today</span>';
			else return '<span class="label label-duetoday">Due ' + pluralize(-task.days_due, 'day') + ' ago</span>';
		}
	}
	
	// dynamic filtering jsfiddle: http://jsfiddle.net/pkozlowski_opensource/JtAZM/1/

}); // end tasksController

/* Encounters controller */

app.controller('encountersController', function($scope, contactResource, practiceResource, accountResource, encountersResource, billersResource) {

	$scope.active_encounters = 'active';			// highlight navbar
	
	$scope.encounters = encountersResource.list();
	
	$scope.getContact = function(encounter) {
		var contact = contactResource.findById(encounter.cid);
		return contact.first + ' ' + contact.last;
	}
	
	$scope.getAvatar = function(encounter) {
        var b = billersResource.findById(encounter.bid);
        if (b.avatar) return '<img src="' + b.avatar + '" />';
        else return '<div>' + b.first.substring(0,1) + b.last.substring(0,1) + '</div>';
    }
    
    $scope.getPractice = function(encounter) {
	    var contact = contactResource.findById(encounter.cid);
	    var practice = practiceResource.findById(contact.pid);
	    return practice.name;
    }
    
    $scope.getAccountPractice = function(encounter) {
	    var contact = contactResource.findById(encounter.cid);
	    var practice = practiceResource.findById(contact.pid);
	    var account = accountResource.findById(practice.aid);
	    
	    return account.name + ' / ' + practice.name;
    }
    
    /*
    0. haven't done anything
	1. pending CH
	2. denied
	3. rejected
	4. pending insurance (same as "ack"?)
	5. awaiting payment (ERA received?)
	6. payment received
	7. settled
	*/
	
	$scope.getStatus = function(encounter) {
		var output;
		switch(encounter.status) {
			case 1:
			case 4:
			case 5:
				output = '<div class="status entypo pending">&#128340;</div>';
				break;
			case 2:
			case 3:
				output = '<div class="status entypo rejected">&#10060;</div>';
				break;
			case 6:
			case 7:
				output = '<div class="status entypo success">&#10003;</div>';
				break;
			default:
				output = '<div class="status entypo">&#9204;</div>';	
		}
		
		return output;
	}

}); // end encountersController

// FACTORIES

/* Tasks data */

app.factory('tasksResource', function () {

	var data = [{"id":1,"title":"Putting The Focus On The Family Business","aid":2,"bid":6,"pid":1,"date_created":"2012-09-26T18:36:36.135Z","days_due":3,"comments":0,"status":1},{"id":2,"title":"The Age Of 'me-first' Management","aid":1,"bid":9,"pid":0,"date_created":"2012-01-11T20:38:24.500Z","days_due":-2,"comments":2,"status":-1},{"id":3,"title":"A Magazine Giant Weighs In On Internet Business","aid":4,"bid":6,"pid":8,"date_created":"2011-09-11T17:24:56.397Z","days_due":5,"comments":1,"status":0},{"id":4,"title":"At Johnson Wax, A Family Passes On Its Heirloom; Father Divides A Business To Keep The Children United","aid":4,"bid":9,"pid":3,"date_created":"2011-02-01T07:36:23.409Z","days_due":-2,"comments":0,"status":1},{"id":5,"title":"Finding Themselves, And Their Niche, In The Marketplace","aid":2,"bid":4,"pid":2,"date_created":"2013-05-25T04:11:13.767Z","days_due":5,"comments":5,"status":0},{"id":6,"title":"At Johnson Wax, A Family Passes On Its Heirloom; Father Divides A Business To Keep The Children United","aid":0,"bid":2,"pid":0,"date_created":"2012-03-17T15:12:22.377Z","days_due":4,"comments":1,"status":-1},{"id":7,"title":"The New Face Of Business Leadership","aid":2,"bid":5,"pid":8,"date_created":"2012-12-14T07:57:33.513Z","days_due":1,"comments":4,"status":1},{"id":8,"title":"In Praise Of Small Business","aid":4,"bid":2,"pid":2,"date_created":"2011-09-18T23:39:59.622Z","days_due":3,"comments":4,"status":1},{"id":9,"title":"Is It Time To Retrain B-schools?","aid":0,"bid":5,"pid":5,"date_created":"2013-06-30T10:20:29.028Z","days_due":2,"comments":2,"status":0},{"id":10,"title":"Survey Indicates Business Travel May Pick Up","aid":3,"bid":8,"pid":4,"date_created":"2013-01-01T06:31:05.877Z","days_due":2,"comments":1,"status":-1},{"id":11,"title":"The B-school Blahs","aid":3,"bid":3,"pid":6,"date_created":"2011-08-28T02:53:10.149Z","days_due":-3,"comments":3,"status":1},{"id":12,"title":"How The Banks Are Squeezing Small Business","aid":4,"bid":0,"pid":8,"date_created":"2012-07-26T13:27:16.225Z","days_due":0,"comments":0,"status":1},{"id":13,"title":"Business Ethics' New Appeal","aid":0,"bid":0,"pid":6,"date_created":"2012-10-21T07:16:19.747Z","days_due":-3,"comments":3,"status":1},{"id":14,"title":"Leaping To The Lectern","aid":1,"bid":5,"pid":5,"date_created":"2013-04-17T10:51:44.990Z","days_due":-1,"comments":4,"status":0},{"id":15,"title":"E-commerce Report; A Mad Dash To Create Electronic Marketplaces For Business-to-business Transactions.","aid":2,"bid":4,"pid":2,"date_created":"2012-03-27T20:20:51.269Z","days_due":1,"comments":2,"status":1},{"id":16,"title":"Business Travel; Companies Increasingly Turn To Corporate Jets, Thanks To The Economy And Airline Hassles.","aid":1,"bid":1,"pid":9,"date_created":"2013-06-05T15:41:24.478Z","days_due":2,"comments":1,"status":0},{"id":17,"title":"A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891","aid":4,"bid":3,"pid":0,"date_created":"2011-04-07T02:47:57.627Z","days_due":1,"comments":0,"status":0},{"id":18,"title":"The B-school Blahs","aid":4,"bid":6,"pid":8,"date_created":"2012-03-30T20:35:46.662Z","days_due":-3,"comments":0,"status":-1},{"id":19,"title":"In Praise Of Small Business","aid":1,"bid":6,"pid":1,"date_created":"2012-01-04T04:57:50.464Z","days_due":-2,"comments":1,"status":1},{"id":20,"title":"Easing The Passing Of The Torch In Companies","aid":3,"bid":6,"pid":9,"date_created":"2012-06-18T16:07:09.425Z","days_due":5,"comments":5,"status":1},{"id":21,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":4,"bid":1,"pid":6,"date_created":"2013-06-13T02:53:02.620Z","days_due":0,"comments":0,"status":-1},{"id":22,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":2,"bid":0,"pid":8,"date_created":"2011-01-31T20:20:11.092Z","days_due":-1,"comments":4,"status":-1},{"id":23,"title":"A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891","aid":4,"bid":8,"pid":8,"date_created":"2013-03-29T16:56:20.670Z","days_due":4,"comments":4,"status":-1},{"id":24,"title":"In Praise Of Small Business","aid":0,"bid":6,"pid":5,"date_created":"2012-09-03T05:16:46.842Z","days_due":1,"comments":1,"status":1},{"id":25,"title":"A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891","aid":1,"bid":3,"pid":3,"date_created":"2012-05-28T00:06:01.153Z","days_due":0,"comments":0,"status":-1},{"id":26,"title":"Easing The Passing Of The Torch In Companies","aid":3,"bid":6,"pid":4,"date_created":"2011-04-01T09:58:48.145Z","days_due":-2,"comments":5,"status":1},{"id":27,"title":"Business Travel; Companies Increasingly Turn To Corporate Jets, Thanks To The Economy And Airline Hassles.","aid":0,"bid":1,"pid":3,"date_created":"2011-11-27T17:58:52.408Z","days_due":-2,"comments":5,"status":0},{"id":28,"title":"In Praise Of Small Business","aid":3,"bid":8,"pid":1,"date_created":"2013-07-13T01:26:13.715Z","days_due":2,"comments":4,"status":1},{"id":29,"title":"Crain's Folds Its Competitor","aid":0,"bid":3,"pid":2,"date_created":"2013-02-09T04:37:12.593Z","days_due":-3,"comments":1,"status":-1},{"id":30,"title":"Working Relationships","aid":0,"bid":2,"pid":7,"date_created":"2013-02-13T08:19:14.551Z","days_due":-1,"comments":0,"status":1},{"id":31,"title":"Poll Finds Concerns That Bush Is Overly Influenced By Business","aid":0,"bid":0,"pid":1,"date_created":"2012-02-06T14:05:40.958Z","days_due":-3,"comments":4,"status":0},{"id":32,"title":"Revolutionary Ventures: Surviving And Profiting Through The Centuries","aid":3,"bid":3,"pid":0,"date_created":"2013-06-28T12:36:03.644Z","days_due":-1,"comments":2,"status":-1},{"id":33,"title":"Struggling To Bring Back The Glitter; Today, The Diamond District Is More Crass Than Class. Can It Survive? Solomon Gad's Offspring May Hold A Clue.","aid":2,"bid":7,"pid":0,"date_created":"2012-02-10T07:46:24.087Z","days_due":3,"comments":3,"status":1},{"id":34,"title":"Users, Providers Face Adjustments","aid":2,"bid":1,"pid":3,"date_created":"2011-12-26T01:24:47.716Z","days_due":-2,"comments":0,"status":-1},{"id":35,"title":"Business Travel; Companies Increasingly Turn To Corporate Jets, Thanks To The Economy And Airline Hassles.","aid":2,"bid":4,"pid":1,"date_created":"2012-07-23T17:31:49.493Z","days_due":0,"comments":1,"status":-1},{"id":36,"title":"What's In A Name?","aid":1,"bid":0,"pid":3,"date_created":"2013-02-11T02:49:59.289Z","days_due":-1,"comments":5,"status":0},{"id":37,"title":"Mixed Bag For Small Business","aid":2,"bid":1,"pid":4,"date_created":"2012-04-18T05:42:31.478Z","days_due":4,"comments":2,"status":0},{"id":38,"title":"A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891","aid":4,"bid":6,"pid":2,"date_created":"2013-09-04T10:32:03.401Z","days_due":-1,"comments":1,"status":-1},{"id":39,"title":"Poll Finds Concerns That Bush Is Overly Influenced By Business","aid":4,"bid":8,"pid":4,"date_created":"2012-02-01T01:05:41.354Z","days_due":3,"comments":1,"status":0},{"id":40,"title":"Revolutionary Ventures: Surviving And Profiting Through The Centuries","aid":4,"bid":4,"pid":5,"date_created":"2011-04-24T03:35:45.324Z","days_due":-1,"comments":2,"status":0},{"id":41,"title":"What's In A Name?","aid":2,"bid":8,"pid":0,"date_created":"2012-07-03T12:45:00.618Z","days_due":-1,"comments":2,"status":0},{"id":42,"title":"A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891","aid":4,"bid":7,"pid":3,"date_created":"2011-12-24T13:52:04.388Z","days_due":-3,"comments":1,"status":-1},{"id":43,"title":"Leaping To The Lectern","aid":2,"bid":6,"pid":5,"date_created":"2011-12-17T04:37:50.514Z","days_due":5,"comments":4,"status":-1},{"id":44,"title":"Struggling To Bring Back The Glitter; Today, The Diamond District Is More Crass Than Class. Can It Survive? Solomon Gad's Offspring May Hold A Clue.","aid":4,"bid":3,"pid":5,"date_created":"2011-02-26T23:28:46.224Z","days_due":-2,"comments":1,"status":-1},{"id":45,"title":"E-commerce Report; A Mad Dash To Create Electronic Marketplaces For Business-to-business Transactions.","aid":3,"bid":3,"pid":7,"date_created":"2013-01-18T16:17:10.505Z","days_due":3,"comments":3,"status":-1},{"id":46,"title":"Akio Morita, Co-founder Of Sony And Japanese Business Leader, Dies At 78","aid":3,"bid":4,"pid":9,"date_created":"2011-07-20T13:47:04.535Z","days_due":0,"comments":3,"status":-1},{"id":47,"title":"Leaping To The Lectern","aid":0,"bid":3,"pid":9,"date_created":"2013-07-16T23:25:32.773Z","days_due":3,"comments":2,"status":0},{"id":48,"title":"Working Relationships","aid":0,"bid":8,"pid":5,"date_created":"2011-01-30T05:06:07.537Z","days_due":5,"comments":0,"status":0},{"id":49,"title":"Poll Finds Concerns That Bush Is Overly Influenced By Business","aid":4,"bid":8,"pid":6,"date_created":"2012-05-05T19:18:34.842Z","days_due":-1,"comments":5,"status":0},{"id":50,"title":"Practical Traveler; Is 'business Class' For You?","aid":3,"bid":1,"pid":7,"date_created":"2012-07-27T06:56:51.041Z","days_due":-1,"comments":4,"status":1},{"id":51,"title":"Revolutionary Ventures: Surviving And Profiting Through The Centuries","aid":3,"bid":6,"pid":4,"date_created":"2012-02-12T02:54:12.167Z","days_due":1,"comments":3,"status":1},{"id":52,"title":"In Praise Of Small Business","aid":2,"bid":7,"pid":1,"date_created":"2011-06-27T12:05:23.733Z","days_due":4,"comments":5,"status":1},{"id":53,"title":"Users, Providers Face Adjustments","aid":3,"bid":4,"pid":7,"date_created":"2013-03-25T21:36:29.796Z","days_due":4,"comments":3,"status":1},{"id":54,"title":"Akio Morita, Key To Japan's Rise As Co-founder Of Sony, Dies At 78","aid":2,"bid":1,"pid":7,"date_created":"2011-03-22T13:35:32.563Z","days_due":-2,"comments":5,"status":1},{"id":55,"title":"Akio Morita, Key To Japan's Rise As Co-founder Of Sony, Dies At 78","aid":1,"bid":0,"pid":8,"date_created":"2013-06-24T20:33:32.220Z","days_due":-3,"comments":2,"status":0},{"id":56,"title":"Easing The Passing Of The Torch In Companies","aid":0,"bid":9,"pid":8,"date_created":"2013-04-11T05:21:41.519Z","days_due":5,"comments":4,"status":-1},{"id":57,"title":"Survey Indicates Business Travel May Pick Up","aid":2,"bid":5,"pid":1,"date_created":"2013-06-08T00:15:04.131Z","days_due":1,"comments":3,"status":1},{"id":58,"title":"Working Relationships","aid":4,"bid":7,"pid":4,"date_created":"2013-12-01T21:00:29.209Z","days_due":3,"comments":5,"status":0},{"id":59,"title":"Whose Side Is Business On, Anyway?","aid":2,"bid":4,"pid":7,"date_created":"2011-06-07T23:41:35.328Z","days_due":5,"comments":3,"status":-1},{"id":60,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":1,"bid":7,"pid":7,"date_created":"2011-07-23T23:37:14.076Z","days_due":0,"comments":5,"status":-1},{"id":61,"title":"From Moving Mexico's Cola To Shaking Its Politics","aid":3,"bid":7,"pid":1,"date_created":"2011-01-21T08:50:14.013Z","days_due":0,"comments":5,"status":-1},{"id":62,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":0,"bid":8,"pid":8,"date_created":"2012-09-24T04:41:27.376Z","days_due":-3,"comments":5,"status":-1},{"id":63,"title":"Supreme Court Inc.","aid":0,"bid":8,"pid":5,"date_created":"2011-04-27T02:51:54.710Z","days_due":-3,"comments":2,"status":0},{"id":64,"title":"Practical Traveler; Is 'business Class' For You?","aid":4,"bid":6,"pid":8,"date_created":"2012-05-19T01:13:19.883Z","days_due":2,"comments":4,"status":1},{"id":65,"title":"From Moving Mexico's Cola To Shaking Its Politics","aid":0,"bid":7,"pid":9,"date_created":"2011-01-14T04:42:57.671Z","days_due":1,"comments":3,"status":0},{"id":66,"title":"Poll Finds Concerns That Bush Is Overly Influenced By Business","aid":3,"bid":4,"pid":2,"date_created":"2013-06-26T18:06:36.570Z","days_due":-3,"comments":3,"status":-1},{"id":67,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":1,"bid":9,"pid":4,"date_created":"2013-11-20T06:25:44.072Z","days_due":4,"comments":2,"status":-1},{"id":68,"title":"Irving S. Shapiro, Attorney At Law","aid":1,"bid":7,"pid":6,"date_created":"2012-11-22T12:12:39.049Z","days_due":-1,"comments":5,"status":1},{"id":69,"title":"Earning It;for Insurance, Home Offices Can Be Out In The Cold","aid":4,"bid":2,"pid":8,"date_created":"2011-11-12T08:01:37.454Z","days_due":-3,"comments":0,"status":-1},{"id":70,"title":"Working Relationships","aid":2,"bid":1,"pid":9,"date_created":"2011-11-01T00:01:51.171Z","days_due":5,"comments":3,"status":-1},{"id":71,"title":"Crain's Folds Its Competitor","aid":1,"bid":4,"pid":0,"date_created":"2013-11-08T14:26:22.903Z","days_due":0,"comments":3,"status":-1},{"id":72,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":1,"bid":0,"pid":6,"date_created":"2012-03-25T02:57:25.133Z","days_due":-1,"comments":3,"status":-1},{"id":73,"title":"How The Banks Are Squeezing Small Business","aid":2,"bid":1,"pid":8,"date_created":"2013-10-02T12:09:17.579Z","days_due":-2,"comments":1,"status":0},{"id":74,"title":"Leaping To The Lectern","aid":3,"bid":6,"pid":1,"date_created":"2011-03-10T17:21:36.089Z","days_due":1,"comments":1,"status":0},{"id":75,"title":"Women Are Learning The Business Value Of A Good Game Of Golf","aid":0,"bid":6,"pid":5,"date_created":"2013-11-19T00:59:38.941Z","days_due":3,"comments":4,"status":-1},{"id":76,"title":"Business Ethics' New Appeal","aid":1,"bid":7,"pid":0,"date_created":"2012-09-17T07:36:22.227Z","days_due":-2,"comments":3,"status":-1},{"id":77,"title":"Against The Odds","aid":2,"bid":1,"pid":6,"date_created":"2012-11-17T08:00:38.834Z","days_due":2,"comments":0,"status":-1},{"id":78,"title":"Crain's Folds Its Competitor","aid":3,"bid":8,"pid":6,"date_created":"2011-10-14T02:17:11.941Z","days_due":5,"comments":1,"status":0},{"id":79,"title":"Women Are Learning The Business Value Of A Good Game Of Golf","aid":4,"bid":4,"pid":2,"date_created":"2013-05-16T08:55:27.909Z","days_due":4,"comments":0,"status":1},{"id":80,"title":"George Bush The Son Finds That Oil And Blood Do Mix","aid":3,"bid":8,"pid":4,"date_created":"2011-04-01T10:07:01.082Z","days_due":3,"comments":2,"status":-1},{"id":81,"title":"Supreme Court Inc.","aid":1,"bid":9,"pid":1,"date_created":"2013-01-25T09:58:04.110Z","days_due":5,"comments":5,"status":0},{"id":82,"title":"Practical Traveler; Is 'business Class' For You?","aid":0,"bid":5,"pid":3,"date_created":"2012-04-11T18:25:52.365Z","days_due":2,"comments":3,"status":-1},{"id":83,"title":"The New Face Of Business Leadership","aid":1,"bid":3,"pid":3,"date_created":"2012-12-09T19:54:00.472Z","days_due":-2,"comments":5,"status":-1},{"id":84,"title":"Supreme Court Inc.","aid":0,"bid":8,"pid":6,"date_created":"2013-07-16T07:13:09.324Z","days_due":-2,"comments":0,"status":1},{"id":85,"title":"Supreme Court Inc.","aid":0,"bid":7,"pid":4,"date_created":"2013-04-25T05:16:39.502Z","days_due":-2,"comments":2,"status":1},{"id":86,"title":"Whose Side Is Business On, Anyway?","aid":2,"bid":8,"pid":8,"date_created":"2012-11-10T11:22:37.214Z","days_due":3,"comments":1,"status":1},{"id":87,"title":"A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891","aid":3,"bid":1,"pid":1,"date_created":"2012-04-24T14:22:34.986Z","days_due":5,"comments":1,"status":0},{"id":88,"title":"Women Are Learning The Business Value Of A Good Game Of Golf","aid":3,"bid":3,"pid":7,"date_created":"2013-11-26T15:43:36.489Z","days_due":3,"comments":4,"status":0},{"id":89,"title":"Renewing Traditional Values","aid":2,"bid":2,"pid":2,"date_created":"2012-09-08T17:40:30.906Z","days_due":2,"comments":0,"status":0},{"id":90,"title":"Crain's Folds Its Competitor","aid":4,"bid":3,"pid":8,"date_created":"2013-03-29T05:41:35.515Z","days_due":-2,"comments":5,"status":0},{"id":91,"title":"Putting The Focus On The Family Business","aid":3,"bid":5,"pid":1,"date_created":"2012-01-28T02:00:29.901Z","days_due":-1,"comments":4,"status":1},{"id":92,"title":"Why Television's Business Programs Haven't Turned A Profit","aid":3,"bid":3,"pid":3,"date_created":"2013-06-04T19:26:19.126Z","days_due":-1,"comments":3,"status":1},{"id":93,"title":"Leaping To The Lectern","aid":4,"bid":1,"pid":5,"date_created":"2013-07-12T08:49:15.442Z","days_due":1,"comments":1,"status":0},{"id":94,"title":"Survey Indicates Business Travel May Pick Up","aid":2,"bid":9,"pid":9,"date_created":"2013-11-15T14:25:27.947Z","days_due":1,"comments":1,"status":0},{"id":95,"title":"The New Face Of Business Leadership","aid":2,"bid":3,"pid":1,"date_created":"2011-11-27T12:17:46.229Z","days_due":0,"comments":4,"status":-1},{"id":96,"title":"Crain's Folds Its Competitor","aid":4,"bid":3,"pid":9,"date_created":"2013-08-21T12:49:42.011Z","days_due":3,"comments":0,"status":-1},{"id":97,"title":"Renewing Traditional Values","aid":3,"bid":0,"pid":8,"date_created":"2013-07-13T19:28:33.051Z","days_due":5,"comments":3,"status":0},{"id":98,"title":"Earning It;for Insurance, Home Offices Can Be Out In The Cold","aid":3,"bid":9,"pid":9,"date_created":"2012-04-18T22:55:56.412Z","days_due":-3,"comments":3,"status":-1},{"id":99,"title":"Akio Morita, Co-founder Of Sony And Japanese Business Leader, Dies At 78","aid":4,"bid":5,"pid":6,"date_created":"2012-02-11T12:55:05.584Z","days_due":5,"comments":5,"status":-1},{"id":100,"title":"Working Relationships","aid":1,"bid":3,"pid":0,"date_created":"2014-01-21T10:07:51.293Z","days_due":2,"comments":3,"status":1}];

	return {
		list: function() {
			return data;
		},
		filterByStatus: function(status) {
			return _.filter(data, function(task) {
				return task.status == status;
			});
		}
	}
});

/* Encounter data */

app.factory('encountersResource', function () {

	var data = [{"id":1,"bid":7,"cid":14,"amount":110,"amount_paid":107,"date_appointment":"2012-08-13T03:23:06.561Z","date_created":"2012-08-21T17:04:21.439Z","date_updated":"2012-12-15T13:37:47.289Z","comments":5,"status":8},{"id":2,"bid":1,"cid":21,"amount":2563,"amount_paid":922,"date_appointment":"2011-05-04T22:38:08.981Z","date_created":"2012-01-20T05:36:51.940Z","date_updated":"2012-04-29T12:41:46.000Z","comments":5,"status":5},{"id":3,"bid":4,"cid":9,"amount":1039,"amount_paid":507,"date_appointment":"2013-03-21T05:25:53.276Z","date_created":"2013-08-21T23:43:43.749Z","date_updated":"2013-12-20T01:42:19.102Z","comments":2,"status":8},{"id":4,"bid":1,"cid":4,"amount":1959,"amount_paid":1869,"date_appointment":"2012-05-26T07:19:10.621Z","date_created":"2012-11-29T16:25:13.371Z","date_updated":"2013-01-17T15:06:04.494Z","comments":2,"status":10},{"id":5,"bid":2,"cid":34,"amount":3649,"amount_paid":1099,"date_appointment":"2011-07-14T06:09:59.098Z","date_created":"2011-11-14T03:54:10.136Z","date_updated":"2012-01-02T06:45:28.797Z","comments":3,"status":1},{"id":6,"bid":7,"cid":25,"amount":3902,"amount_paid":3834,"date_appointment":"2012-10-08T21:00:57.114Z","date_created":"2013-01-05T16:53:36.413Z","date_updated":"2013-03-17T20:43:08.448Z","comments":5,"status":10},{"id":7,"bid":3,"cid":3,"amount":556,"amount_paid":254,"date_appointment":"2013-02-06T06:21:41.543Z","date_created":"2014-01-31T06:15:10.192Z","date_updated":"2014-12-03T16:33:06.016Z","comments":5,"status":1},{"id":8,"bid":2,"cid":3,"amount":1008,"amount_paid":571,"date_appointment":"2012-04-15T20:50:18.131Z","date_created":"2012-10-18T08:30:06.554Z","date_updated":"2013-01-14T05:36:28.882Z","comments":2,"status":6},{"id":9,"bid":4,"cid":14,"amount":56,"amount_paid":56,"date_appointment":"2011-11-06T18:32:34.497Z","date_created":"2012-01-09T01:05:19.111Z","date_updated":"2012-11-14T04:57:57.421Z","comments":4,"status":0},{"id":10,"bid":7,"cid":5,"amount":1293,"amount_paid":1076,"date_appointment":"2012-12-15T11:33:16.980Z","date_created":"2012-12-28T12:50:26.083Z","date_updated":"2013-01-26T11:26:39.845Z","comments":4,"status":10},{"id":11,"bid":10,"cid":30,"amount":985,"amount_paid":84,"date_appointment":"2013-11-10T09:46:08.166Z","date_created":"2013-11-16T13:00:42.628Z","date_updated":"2013-12-04T14:05:01.802Z","comments":5,"status":5},{"id":12,"bid":1,"cid":12,"amount":1056,"amount_paid":1012,"date_appointment":"2011-04-14T11:18:05.335Z","date_created":"2011-05-25T11:51:58.518Z","date_updated":"2011-09-05T16:57:36.858Z","comments":0,"status":1},{"id":13,"bid":2,"cid":24,"amount":2826,"amount_paid":2817,"date_appointment":"2012-05-26T21:06:23.757Z","date_created":"2012-12-18T04:56:03.349Z","date_updated":"2013-01-23T22:29:15.152Z","comments":2,"status":5},{"id":14,"bid":10,"cid":7,"amount":2817,"amount_paid":119,"date_appointment":"2011-10-17T17:06:21.842Z","date_created":"2011-11-10T12:05:23.946Z","date_updated":"2011-12-05T06:25:06.630Z","comments":0,"status":6},{"id":15,"bid":7,"cid":21,"amount":3655,"amount_paid":1943,"date_appointment":"2012-08-29T04:07:21.612Z","date_created":"2013-01-27T19:23:58.187Z","date_updated":"2013-05-01T22:37:55.349Z","comments":5,"status":9},{"id":16,"bid":1,"cid":7,"amount":3919,"amount_paid":1669,"date_appointment":"2011-10-11T14:14:20.933Z","date_created":"2011-10-19T12:17:59.730Z","date_updated":"2012-01-09T09:29:18.929Z","comments":0,"status":0},{"id":17,"bid":2,"cid":6,"amount":3966,"amount_paid":712,"date_appointment":"2013-08-10T10:07:46.001Z","date_created":"2013-11-15T07:32:23.040Z","date_updated":"2014-01-26T22:54:33.866Z","comments":1,"status":7},{"id":18,"bid":3,"cid":7,"amount":1380,"amount_paid":1075,"date_appointment":"2011-04-26T23:16:36.450Z","date_created":"2011-10-27T05:52:22.317Z","date_updated":"2011-12-08T23:55:11.718Z","comments":4,"status":8},{"id":19,"bid":8,"cid":2,"amount":3626,"amount_paid":2618,"date_appointment":"2013-01-31T12:31:04.732Z","date_created":"2013-07-17T19:31:50.192Z","date_updated":"2014-01-06T11:07:24.116Z","comments":0,"status":1},{"id":20,"bid":10,"cid":16,"amount":3054,"amount_paid":1216,"date_appointment":"2012-05-25T13:19:55.848Z","date_created":"2012-12-04T07:01:28.004Z","date_updated":"2012-12-06T10:12:40.969Z","comments":5,"status":8},{"id":21,"bid":9,"cid":29,"amount":1601,"amount_paid":652,"date_appointment":"2011-12-05T10:11:37.123Z","date_created":"2011-12-17T10:03:14.289Z","date_updated":"2011-12-26T08:22:09.307Z","comments":0,"status":5},{"id":22,"bid":7,"cid":4,"amount":1797,"amount_paid":1352,"date_appointment":"2013-06-06T12:50:00.578Z","date_created":"2014-01-18T19:47:19.373Z","date_updated":"2014-07-26T19:46:41.916Z","comments":4,"status":3},{"id":23,"bid":2,"cid":14,"amount":1826,"amount_paid":490,"date_appointment":"2013-12-26T07:08:39.791Z","date_created":"2014-01-02T23:23:47.483Z","date_updated":"2014-08-19T14:07:39.563Z","comments":1,"status":3},{"id":24,"bid":7,"cid":32,"amount":3985,"amount_paid":3812,"date_appointment":"2011-10-12T14:50:47.138Z","date_created":"2011-11-01T17:08:25.278Z","date_updated":"2011-12-29T05:09:41.683Z","comments":0,"status":9},{"id":25,"bid":2,"cid":5,"amount":3200,"amount_paid":2681,"date_appointment":"2011-09-13T22:17:49.324Z","date_created":"2011-10-28T13:36:28.555Z","date_updated":"2011-11-13T05:01:58.394Z","comments":1,"status":3},{"id":26,"bid":7,"cid":7,"amount":260,"amount_paid":256,"date_appointment":"2012-08-19T06:42:59.789Z","date_created":"2012-10-06T07:06:26.901Z","date_updated":"2012-10-19T22:50:53.015Z","comments":4,"status":2},{"id":27,"bid":3,"cid":32,"amount":541,"amount_paid":541,"date_appointment":"2011-07-17T12:09:01.178Z","date_created":"2011-09-13T18:31:56.959Z","date_updated":"2011-12-14T10:36:32.961Z","comments":3,"status":3},{"id":28,"bid":10,"cid":26,"amount":587,"amount_paid":520,"date_appointment":"2011-10-14T10:13:30.825Z","date_created":"2011-11-20T22:12:16.973Z","date_updated":"2011-12-15T07:47:03.085Z","comments":5,"status":10},{"id":29,"bid":6,"cid":6,"amount":1,"amount_paid":0,"date_appointment":"2012-05-28T05:03:57.297Z","date_created":"2013-01-20T19:42:36.547Z","date_updated":"2013-03-02T02:29:08.088Z","comments":0,"status":4},{"id":30,"bid":8,"cid":15,"amount":3640,"amount_paid":3580,"date_appointment":"2013-03-27T20:03:56.947Z","date_created":"2013-09-15T02:44:03.298Z","date_updated":"2013-10-19T13:26:27.339Z","comments":2,"status":7},{"id":31,"bid":8,"cid":2,"amount":2827,"amount_paid":2774,"date_appointment":"2013-03-29T21:52:41.452Z","date_created":"2013-08-09T01:43:05.024Z","date_updated":"2013-11-15T05:26:36.478Z","comments":0,"status":6},{"id":32,"bid":10,"cid":29,"amount":1680,"amount_paid":1484,"date_appointment":"2012-05-10T08:51:23.251Z","date_created":"2012-06-29T23:03:42.814Z","date_updated":"2012-11-04T12:05:38.947Z","comments":4,"status":10},{"id":33,"bid":5,"cid":23,"amount":712,"amount_paid":121,"date_appointment":"2011-05-29T10:25:08.961Z","date_created":"2011-08-28T18:22:24.612Z","date_updated":"2011-10-20T06:17:22.616Z","comments":5,"status":7},{"id":34,"bid":5,"cid":16,"amount":1144,"amount_paid":782,"date_appointment":"2011-08-28T23:17:40.333Z","date_created":"2011-09-15T03:01:49.004Z","date_updated":"2011-12-30T07:03:20.592Z","comments":2,"status":3},{"id":35,"bid":4,"cid":16,"amount":1980,"amount_paid":1593,"date_appointment":"2011-06-16T15:08:56.362Z","date_created":"2011-10-18T14:30:32.712Z","date_updated":"2012-01-13T08:19:04.276Z","comments":4,"status":5},{"id":36,"bid":2,"cid":25,"amount":778,"amount_paid":228,"date_appointment":"2011-04-22T19:41:40.063Z","date_created":"2011-10-10T18:57:45.568Z","date_updated":"2011-12-06T20:02:45.316Z","comments":5,"status":10},{"id":37,"bid":2,"cid":21,"amount":2259,"amount_paid":1227,"date_appointment":"2013-05-08T21:40:05.632Z","date_created":"2014-01-18T02:48:30.590Z","date_updated":"2015-01-06T08:08:31.075Z","comments":2,"status":0},{"id":38,"bid":6,"cid":25,"amount":829,"amount_paid":592,"date_appointment":"2011-12-19T16:22:49.325Z","date_created":"2012-01-22T08:45:20.654Z","date_updated":"2012-10-20T17:19:46.903Z","comments":3,"status":9},{"id":39,"bid":10,"cid":18,"amount":2999,"amount_paid":2434,"date_appointment":"2012-11-20T06:41:40.724Z","date_created":"2012-11-27T09:53:36.656Z","date_updated":"2012-12-10T15:33:06.159Z","comments":0,"status":9},{"id":40,"bid":5,"cid":24,"amount":2849,"amount_paid":1605,"date_appointment":"2011-05-06T10:35:44.279Z","date_created":"2011-09-01T09:25:33.289Z","date_updated":"2011-11-06T13:37:51.683Z","comments":5,"status":3},{"id":41,"bid":9,"cid":6,"amount":2029,"amount_paid":609,"date_appointment":"2011-08-03T18:10:34.130Z","date_created":"2011-11-19T10:41:47.185Z","date_updated":"2012-01-20T09:22:16.533Z","comments":2,"status":9},{"id":42,"bid":8,"cid":8,"amount":2485,"amount_paid":36,"date_appointment":"2013-05-19T08:35:30.076Z","date_created":"2014-01-01T23:39:25.633Z","date_updated":"2014-12-27T05:54:09.559Z","comments":0,"status":3},{"id":43,"bid":10,"cid":14,"amount":1698,"amount_paid":222,"date_appointment":"2012-03-08T19:04:49.129Z","date_created":"2012-07-29T11:38:45.267Z","date_updated":"2012-10-10T12:54:00.974Z","comments":4,"status":9},{"id":44,"bid":2,"cid":3,"amount":3054,"amount_paid":2884,"date_appointment":"2011-02-09T09:21:34.607Z","date_created":"2011-12-07T03:39:29.359Z","date_updated":"2011-12-31T01:41:47.809Z","comments":5,"status":6},{"id":45,"bid":2,"cid":8,"amount":125,"amount_paid":87,"date_appointment":"2011-12-28T13:10:24.218Z","date_created":"2011-12-29T13:15:35.036Z","date_updated":"2012-01-28T12:15:32.223Z","comments":4,"status":3},{"id":46,"bid":6,"cid":22,"amount":3029,"amount_paid":84,"date_appointment":"2012-12-02T02:43:04.270Z","date_created":"2012-12-18T07:24:12.449Z","date_updated":"2012-12-30T23:27:42.578Z","comments":4,"status":3},{"id":47,"bid":3,"cid":17,"amount":2139,"amount_paid":573,"date_appointment":"2012-03-17T12:55:40.765Z","date_created":"2012-06-29T05:32:07.082Z","date_updated":"2012-10-19T02:06:51.954Z","comments":1,"status":1},{"id":48,"bid":7,"cid":10,"amount":2303,"amount_paid":685,"date_appointment":"2011-11-14T00:28:44.435Z","date_created":"2012-01-23T21:36:42.952Z","date_updated":"2012-02-18T08:41:53.162Z","comments":4,"status":8},{"id":49,"bid":9,"cid":3,"amount":2295,"amount_paid":1642,"date_appointment":"2013-07-25T01:29:55.788Z","date_created":"2013-08-31T10:31:55.010Z","date_updated":"2013-10-30T08:05:03.380Z","comments":0,"status":9},{"id":50,"bid":6,"cid":1,"amount":3188,"amount_paid":2046,"date_appointment":"2011-04-22T19:21:29.399Z","date_created":"2011-05-06T15:08:27.021Z","date_updated":"2011-05-15T15:15:46.868Z","comments":1,"status":1}];
	
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

	var data = [{"id":1,"first":"Armine","last":"Manukian","avatar":"http://uifaces.com/faces/michelle_120.jpg"},
	{"id":2,"first":"Briana","last":"Kawaihae", "avatar":"http://uifaces.com/faces/renee_120.jpg"},
	{"id":3,"first":"Jonathan","last":"Morillo","avatar":"http://uifaces.com/faces/_twitter/ryanAmurphy_120.jpg"},
	{"id":4,"first":"Valentine","last":"Grimes"},{"id":5,"first":"Mannix","last":"Vincent"},{"id":6,"first":"Sawyer","last":"Walls"},{"id":7,"first":"Finn","last":"Lynn"},{"id":8,"first":"Calvin","last":"Frank"},{"id":9,"first":"Ferris","last":"Mendez"},{"id":10,"first":"Herman","last":"Abbott"}];
	
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

