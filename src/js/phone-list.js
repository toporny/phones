﻿'use strict';

var phones_array = [];

// show phone list
function show_phones(phones_array) {

	var a = '<div class="row" class="margin-l-0"> ';

	for (var i = 0; i < phones_array.length; i++) { 
		if (phones_array[i].outOfStock == false ) {

			var colors = '';
			if (typeof phones_array[i].colors !== 'undefined') {
				colors = `(${phones_array[i].colors.length} colors) `;
			}

			var price = '';
			if (phones_array[i].priceFrom == 0) {
				price = 'Price: free ';
			}
			else {
				price = `From: €${phones_array[i].priceFrom}`;
			}

			a+=`
			   <div class="phone-tile" data-productid="${phones_array[i].productid}" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
			      <div class="card2">
			         <div class="front"> 
			            <img width="200" height="340" src="${phones_array[i].imageFront}">
			         </div>
			         <div class="back">
			            <img width="200" height="340" src="${phones_array[i].imageBack}">
			         </div>
			      </div>
			      <div class="phone-description">
			         <h6>${phones_array[i].description}</br> ${colors} ${price}</h6>
			         <type="button" class="btn btn-sm btn-danger">more details...</button>
			      </div>
			   </div>
			\n`
		}
	}
	a += '</div>';

	$('.phone-list').html(a); 

	attach_event();

	$(".card2").flip({
		axis: 'y',
		trigger: 'hover'
	});

}

var dataPhones;
var dataIndexes = [];

$.ajaxSetup({
  "error":function() { 
		bootbox.alert({
			message: "Problem with getting data.",
			size: 'small'
		});
    }
});

$.getJSON('json/feed.json', function (data) {
 
	phones_array = [];
	var count = 0;
	$.each(data, function(i, field) {
		phones_array.push(field);
		dataIndexes[field.productid] = count++;
	});
	
	dataPhones = phones_array.slice();

	show_phones(phones_array);
});



var oNewArray1;
var dataPhones1;

function refreshPhones(oNewArray) {

	oNewArray1 = oNewArray;
	dataPhones1 = dataPhones;

	var phones_array1 = [];
 
	for (var i = 0; i < dataPhones.length; i++) {

		var bool_manufacturer = false;
		var bool_features = false;
		var bool_platform = false;
		var bool_types = false;

		if (oNewArray.manufacturers.length > 0)
			for (var j = 0; j < oNewArray.manufacturers.length; j++) { 
				if (dataPhones[i].manufacturer.indexOf(oNewArray.manufacturers[j]) != -1) {
					bool_manufacturer = true;
				}
			}
		else {
			bool_manufacturer = true;
		}

		// filterfeatures
		if (oNewArray.features.length > 0) {
			for (var j = 0; j < oNewArray.features.length; j++) {
				if (oNewArray.features[j] == "Keys") {
					if (dataPhones[i].filterfeatures.Touchscreen == false) {
						bool_features = true;
					}
				}
				if (oNewArray.features[j] == "Large Keys") {
					if (dataPhones[i].filterfeatures["Large keys"] == true) {
						bool_features = true;
					}
				}
			}
		}
		else {
			bool_features = true;
		}


		// platforms
		if (oNewArray.platforms.length > 0) {
			for (var j = 0; j < oNewArray.platforms.length; j++) {
				if (oNewArray.platforms[j] == "Apple") {
					if (dataPhones[i].manufacturer == "Apple") {
						bool_platform = true;
					}
				}
				if (oNewArray.platforms[j] == "Android") {
					if (dataPhones[i].filterfeatures.Android == true) {
						bool_platform = true;
					}
				}
			}
		}
		else {
			bool_platform = true;
		}

		// types
		if (oNewArray.types.length > 0) {
			for (var j = 0; j < oNewArray.types.length; j++) {
				if (oNewArray.types[j] == "Simple phones") {
					if (dataPhones[i].categoryfeatures['Simple Phones'] == true) {
						bool_types = true;
					}
				}
			}
		}
		else {
			bool_types  = true;
		}


		if ( bool_manufacturer && bool_features && bool_platform && bool_types ) {
			phones_array1.push(dataPhones[i]);
		}
	}
	
	show_phones(phones_array1);
}

