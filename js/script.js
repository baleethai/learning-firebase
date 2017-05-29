$(document).ready(function() {
	var rootRef = firebase.database().ref().child("buses");
	rootRef.on('child_added', snap => {
		var name   = snap.child("name").val();
		var photo  = snap.child("photo").val();
		var status = snap.child("status").val();
		$("#table_body").append('<tr><td>'+name+'</td><td><img src="'+photo+'" width="50"></td><td>'+status+'</td></tr>');
	});


});