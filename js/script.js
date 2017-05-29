var mainText = document.getElementById('mainText');
var submitBtn = document.getElementById('submitBtn');
var firebaseHeading = document.getElementById('firebaseHeading');
var firebaseHeadingRef = firebase.database().ref().child("Heading");
firebaseHeadingRef.on('value', function(dataSnapshot) {
	firebaseHeading.innerText = dataSnapshot.val();
});
function submitClick() {
	var firebaseRef = firebase.database().ref();
	var messageText = mainText.value;
	firebaseRef.push().set(messageText);
}
