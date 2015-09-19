$(document).ready(function($) {
	$.getJSON('bulls.json', function(data, results) {
		// displaying codeno to select and adding <option> tag to it
		var $selectCodeno = $('#codeno');
		$.each(data.results, function(key, val) {
			// codename dropdown selector list and adding a value to it
			var $optionCodeno = $("<option>").attr("value", val.codeno).text(val.codeno);
			$selectCodeno.append($optionCodeno);
		});
	});
});