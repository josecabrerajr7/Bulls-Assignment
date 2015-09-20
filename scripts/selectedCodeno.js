$(document).ready(function($) {
	$.getJSON('bulls.json', function(data, results) {
		// displaying codeno to select and adding <option> tag to it
		var $selectCodeno = $('#codeno');
		$.each(data.results, function(key, val) {
			// codename dropdown selector list and adding a value to it
			var $optionCodeno = $("<option>").attr("value", val.codeno).text(val.codeno);
			$selectCodeno.append($optionCodeno);
		});
		$selectCodeno.change(function(event) {
			var selectValue = $('#codeno option:selected').val();
			var regex = new RegExp(selectValue, "i");
			var output = '<tr>';
			var count = 1;
			var optionDefault = $('#codeno option:selected').val();
			$.each(data.results, function(key, val) {
				if (val.codeno.search(regex) !== -1) {
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
				output += '</tr>';
				$('#display').html(output);
			if (optionDefault == 'Codeno Default') {
				 $.each(data.results, function(key, val){
            		$('#display').append('<tr>' 
                		+ '<td class="codenoVal">'
                		+ this['codeno']
                		+ '</td><td class="codenameVal">' 
                		+ this['codename'] 
                		+ '</td><td class="ptamVal">' 
                		+ this['ptam'] 
                		+ '</td><td class="ptapVal">' 
                		+ this['ptap'] 
                		+ '</td><td class="ptatVal">' 
                		+ this['ptat'] 
                		+ '</td><td class="tpiVal">' 
                		+ this['tpi'] 
                		+ '</td>' 
                		+ '</tr>'
               		);

            	});
			}
		});

	});
});