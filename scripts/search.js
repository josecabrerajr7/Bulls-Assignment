// search needs validation, when user doesn't find any result
$(document).ready(function($) {
	$('#search').keyup(function(event) {
		// adding searchField to user input
		var searchField = $('#search').val();
		// RegExp stands for regular expression and the "i" stands or ingore case in the search field
		var regex = new RegExp(searchField, "i");
		var output = '<tr>';
		var count = 1;
		$.getJSON('bulls.json', function(data) {
			$.each(data.results, function(key, val) {
				// going to get codename and codeno in the json file and going to match if there is info, if there is 
				// then it will display the result
				if ( (val.codename.search(regex) != -1) || (val.codeno.search(regex) != -1) ) {
					output += '<tr>'
					output += '<td>' + val.codeno + '</td>';
					output += '<td>' + val.codename + '</td>';
					output += '<td>' + val.ptam + '</td>';
					output += '<td>' + val.ptap + '</td>';
					output += '<td>' + val.ptat + '</td>';
					output += '<td>' + val.tpi + '</td>';
					// if there is no results display nothing
					if (count%2 == 0) {
						output += '</tr>';
					}
					count++;
				}
			});
			// closing the table roll and previewing it in the browser
			output += '</tr>';
			$('#display').html(output);
		});
	});
	
});
