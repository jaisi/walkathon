"use strict";

var Walkathon = (function(taco) {
	var dataContainer = $(".results__display");
	var final_info = [];
    taco.addDonor = function(info){
        var form = $(".contact-form");
        console.log("final_info", final_info);
		final_info.push(info);
		dataContainer.html();
		console.log("final_info", final_info);
		for(i in final_info){
			console.log("final_info within for", final_info[i].name);
			dataContainer.append("<div class='row'><div class='col-sm-3'>" + final_info[i].name 
										+ "</div><div class='col-sm-3'>" + final_info[i].email 
										+ "</div><div class='col-sm-3'>" + final_info[i].amount 
										+ "</div><div class='col-sm-3'>" 
										+ (final_info[i].perlap ? final_info[i].perlap : final_info[i].single)
									    + "</row>");
		}
	};
    
    return taco;
})(Walkathon || {});