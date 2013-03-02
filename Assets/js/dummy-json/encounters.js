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

var max_e = 50;			// max # of encounters
var max_amount = 4000;	// max # dollar amount
var max_b = 10;			// max # of billers
var max_c = 35;			// max # of contacts/patients
var max_p = 10;			// max # of practices
var max_a = 5;			// max # of accounts

// --The Loop--

// ENCOUNTERS
// bid = biller id
// cid = contact id, or patient id

for(var i=1; i<=max_e; i++) {
	var item = rnd({
		id: "i",
		bid: "$int(1, max_b-1)",
		cid: "$int(1, max_c-1)",
		amount: "$int(max_amount)",
		date_created: "$date",
		date_updated: "$dateGreaterThan($.date_created)",
		comments: "$int(5)",
		status: "$int(10)"
	});
	
	arr.push(item);
}

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


// FINAL OUTPUT

$(document).ready(function() {
	
	$('#output').html(JSON.stringify(arr));

});
