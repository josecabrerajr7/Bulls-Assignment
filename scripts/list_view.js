$(document).ready(function($) {
    // main coding to display the json in the index.html page
	 $.getJSON('bulls.json', function(data){
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
                + '</tr>');  

                $('.codenoVal').attr("value", this['codeno']);
                $('.codenameVal').attr("value", this['codename']);
                $('.ptamVal').attr("value", this['ptam']);
                $('.ptapVal').attr("value", this['ptap']);
                $('.ptatVal').attr("value", this['ptat']);
                $('.tpiVal').attr("value", this['tpi']);

            });

            // the headings will be sort using A or Z and numbers from negative high and positive high number
            { 
                $("#mainTable").tablesorter( {sortList: [[0,0], [1,0]]} ); 
            } 
	   });
});