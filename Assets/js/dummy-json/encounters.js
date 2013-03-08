/*	*
	* Abe Yang (3/1/2013)
	* Generate $max_e encounters with random amounts, 
	* assigned to $max_b billers,
	* associated to $max_c contacts/patients
	* with at most $max_amount dollar amount
	*
	* Contacts/patients are associated to $max_p practices,
	* which are assocated to $max_a accounts
*/

var rnd = init();
var arr = [];

// --Master config variables--

var max_e = 50;		// max encounters
var max_amount = 4000;	// max # dollar amount
var max_b = 10;			// max # of billers
var max_c = 35;			// max # of contacts/patients
var max_p = 10;			// max # of practices
var max_a = 5;			// max # of accounts
var max_tasks = 100;	// max tasks
var max_comments = 5;

// --The Loop--

// ENCOUNTERS
// bid = biller id
// cid = contact id, or patient id

/*
for(var i=1; i<=max_e; i++) {
	var item = rnd({
		id: "i",
		bid: "$int(1, max_b-1)",
		cid: "$int(1, max_c-1)",
		amount: "$int(max_amount)",
		amount_paid: "$int($.amount)",
		date_appointment: "$date",
		date_created: "$dateGreaterThan($.date_appointment)",
		date_updated: "$dateGreaterThan($.date_created)",
		comments: "$int(max_comments)",
		status: "$int(10)"
	});
	
	arr.push(item);
}
*/

// BILLERS

/*
for(var i=1; i<=max_b; i++) {
	var item = rnd({
		id: "i",
		first: "$firstName",
		last: "$surName"
	});
	
	arr.push(item);
}
*/

// PATIENTS/CONTACTS
// pid = practice id

/*
for(var i=1; i<=max_c; i++) {
	var item = rnd({
		id: "i",
		pid: "$int(1, max_p-1)",
		first: "$firstName",
		last: "$surName",
		company: "$company",
		email: "$.first + '.' + $.last + '@' + $.company + '.com'",
		phone: "$code('###-###-###')",
		address_1: "$code('####')",
		address: "$.address_1 + ' ' + $.company + ' St.'",
		city: "$city",
		state: "'CA'",
		zip: "$code('#####')",
		dob: "$dateLessThan(1990-01-01)",
		ssn: "$code('###-##-####')"
	});
	
	arr.push(item);
}
*/

// PRACTICES
// aid = account id

/*
for(var i=1; i<=max_p; i++) {
	var item = rnd({
		id: "i",
		aid: "$int(1, max_a-1)",
		company: "$company",
		name: "$.company + ' Practice'",
		address_1: "$code('####')",
		address: "$.address_1 + ' ' + $.company + ' St.'",
		city: "$city",
		state: "'CA'",
		zip: "$code('#####')"
	});
	
	arr.push(item);
}
*/

// ACCOUNTS

/*
for(var i=1; i<=max_a; i++) {
	var item = rnd({
		id: "i",
		company: "$company",
		name: "$.company + ' Account'"
	});
	
	arr.push(item);
}
*/

// TASKS
// status: -1: deleted | 0: incomplete | 1: completed
// aid = account id (0: no account associated)
// bid = biller id (0: no biller associated)
// pid = practice id (0: no practice associated)
// days_due: weighted towards nothing (anything less than -2 or greater than 3 counts as nothing; 0 means due today)
// type: 0: nothing | 1: patient | 2: encounter | 3: claim | 4: payment

for(var i=1; i<=max_tasks; i++) {
	var item = rnd({
		id: "i",
		title: "$title",
		aid: "$int(max_a-1)",
		bid: "$int(max_b-1)",
		pid: "$int(max_p-1)",
		date_created: "$date",
		days_due: "$int(-3,8)",
		comments: "$int(0,max_comments)",
		type: "$int(0, 5)",
		type_id: "$int(max_c-1)",
		status: "$int(-1,2)"
	});
	
	arr.push(item);
}

// COMMENTS
// bid = biller id
// tid = task id

for(var i=1; i<=max_tasks; i++) {
	var item = rnd({
		id: "i",
		comment: "$description",
		bid: "$int(max_b-1)",
		tid: "$int(max_tasks-1)",
		date: "$date"
	});
	
	arr.push(item);
}


// FINAL OUTPUT

$(document).ready(function() {
	
	$('#output').html(JSON.stringify(arr));

});
