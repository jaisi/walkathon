"use strict";

var Walkathon = (function(taco) {
	let dataContainer = $(".results__display");
	let final_info = [];
    taco.addDonor = function(info){
        var form = $(".contact-form");
        console.log("final_info", final_info);
		final_info.push(info);
		dataContainer.empty();
		//dataContainer.html(`<div class=row><div class='col-sm-3'>Name</div>
							//<div class='col-sm-3'>Email</div><div class='col-sm-3'>Amount</div>
							//<div class='col-sm-3'>Type</div></div>`);
		console.log("final_info", final_info);
		console.log("final_info within for", final_info);
		for(var i = 0; i < final_info.length; i++){
			dataContainer.append("<div class='row'><div class='col-sm-3'>" 
						+ (final_info[i].name ? final_info[i].name : "")
						+ "</div><div class='col-sm-3'>" 
						+ (final_info[i].email  ? final_info[i].email : "")
						+ "</div><div class='col-sm-3'>" 
						+ (final_info[i].amount  ? final_info[i].amount :"")								
						+ "</div><div class='col-sm-3'>" 
						+ (final_info[i].perlap ? final_info[i].perlap : (final_info[i].single ? final_info[i].single : ""))
					    + "</div></div>");
	
		}
		
	};
    
    return taco;
})(Walkathon || {});