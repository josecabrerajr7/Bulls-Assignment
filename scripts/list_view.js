$(document).ready(function($) {
    // main coding to display the json in the index.html page
	 $.getJSON('bulls.json', function(data){
          $.each(data.results, function(key, val){
            content = '<tr>';
            content += '<td>' + val.codeno + '</td>';
            content += '<td>' + val.codename + '</td>';
            content += '<td>' + val.ptam + '</td>';
            content += '<td>' + val.ptap + '</td>';
            content += '<td>' + val.ptat + '</td>';
            content += '<td>' + val.tpi + '</td>';
            content += '</tr>';
            $(content).appendTo("#display");
          });
            // the headings will be sort using A or Z and numbers from negative high and positive high number
            { 
                $("#mainTable").tablesorter( {sortList: [[0,0], [1,0]]} ); 
            } 
	});
});