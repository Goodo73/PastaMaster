$(document).ready(function(){

	$('#signup-btn').on('click', function(e) {
		e.preventDefault();
		alert ('Woo hoo');


		// 
		var apiUser = {
			url: , // users_path
			method: 'post'
			data: {
				// user email & password input
			}
		};
		$.ajax.(apiUser).done(function(user) {
			// user signed up, so now do other stuff
		})

	});

});