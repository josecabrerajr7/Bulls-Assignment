$(document).ready(function($) {
	$.getJSON('bulls.json', function(data, results) {
		// displaying codeno to select and adding <option> tag to it
		var $selectCodeno = $('#codeno');
		$.each(data.results, function(key, val) {
			// codeno dropdown selector list and adding a value to it
			var $optionCodeno = $("<option>").attr("value", val.codeno).text(val.codeno);
			$selectCodeno.append($optionCodeno);
		});
		// When codeno select has selected a value, it will compare and change codename select to its matching 
		// value of unique id
		$("#codeno").change(function () {
   			$('#codename').empty().append($('<option></option>').val('Select Codename').html('Select Codename'));
 			var matchVal = $("#codeno option:selected").text();
   			$.each(data.results, function(key, val) { 
   			if (val.codeno == matchVal) {
   				$("#codename").append($('<option></option>').val(val.codeno).html(val.codename));
			}	 
 			});
   		});
   		// when user select codename from the dropdown it will filter the bottom table to the select value 
		$('#codename').change(function () {
    	var selectValue = $('#codename option:selected').val();
		var regex = new RegExp(selectValue, "i");
		var output = '<tr>';
		var count = 1;
		var selectCodename = $('#codename option:selected').val();
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
			
			// when user select 'Select Codename' in the select field it will return the table back to normal
			// and empty the select value of #codeno and #codename
			if (selectCodename == 'Select Codename') {
				$('#codename').append($('<option></option>').text('Select Codename'));
				$('#codeno').empty().append($('<option></option>').text('Select Codeno'));
				var codenameDefault = $('#codename').val();
					if (codenameDefault == 'Select Codename') {
						var $selectCodeno = $('#codeno');
						$.each(data.results, function(key, val) {
							// codeno dropdown selector list and adding a value to it
							var $optionCodeno = $("<option>").attr("value", val.codeno).text(val.codeno);
							$selectCodeno.append($optionCodeno);
						});
					}
				// going to put the display back to normal when codename select 'Select Codename'
				// is switch back
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