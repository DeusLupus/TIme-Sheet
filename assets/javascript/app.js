var config = {
apiKey: "AIzaSyBqq0Z2UgUNdCjjBUMvgNGjikYTWtTcQcc",
authDomain: "alphasquadtimesheet.firebaseapp.com",
databaseURL: "https://alphasquadtimesheet.firebaseio.com",
storageBucket: "alphasquadtimesheet.appspot.com",
};
firebase.initializeApp(config);

var dataRef = firebase.database();


// Initial Values
var name = "";
var role = "";
var date = "";
var monthRate = "";


// Capture Button Click
$("#addButton").on("click", function() {

	// YOUR TASK!!!
	// Code in the logic for storing and retrieving the most recent user.
	// Dont forget to provide initial data to your Firebase database.
	name = $('#name').val().trim();
	role = $('#role').val().trim();
	date = $('#startDate').val().trim();
	monthRate = $('#monthRate').val().trim();


	// Code for the push
	dataRef.ref().push({
		name: name,
		role: role,
		date: startDate,
		monthRate: monthRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
	// Don't refresh the page!
	return false;
});

//Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
//dataRef.ref().on("child_added", function(childSnapshot) {
	// Log everything that's coming out of snapshot
	// console.log(childSnapshot.val().name);
	// console.log(childSnapshot.val().role);
	// console.log(childSnapshot.val().date);
	// console.log(childSnapshot.val().monthRate);
	

	// full list of items to the well

// 		$('#full-member-list').append("<div class='well'><span id='name'> "+childSnapshot.val().name+" </span><span id='email'> "+childSnapshot.val().email+" </span><span id='age'> "+childSnapshot.val().age+" </span><span id='comment'> "+childSnapshot.val().comment+" </span></div>");


// // Handle the errors
// }, function(errorObject){
// 	//console.log("Errors handled: " + errorObject.code)
// });

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
// 	// Change the HTML to reflect
// 	$("#namedisplay").html(snapshot.val().name);
// 	$("#emaildisplay").html(snapshot.val().email);
// 	$("#agedisplay").html(snapshot.val().age);
// 	$("#commentdisplay").html(snapshot.val().comment);
// })

