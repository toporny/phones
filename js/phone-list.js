phones_array = [];


function show_phones(phones_array) {

	var a = '<div class="phone-list"><div class="row">';

	for (i = 0; i < phones_array.length; i++) { 
	if (phones_array[i].outOfStock == false ) {

		colors = '';
		if (typeof phones_array[i].colors !== 'undefined') {
			colors = `(${phones_array[i].colors.length} colors) `;
		}

		price = '';
		if (phones_array[i].priceFrom == 0) {
			price = 'Price: free ';
		}
		else {
			price = `From: €${phones_array[i].priceFrom}`;
		}

		a+=`
			   <div class="phone-tile col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
	a += '</div></div>';

	$('.phone-list').html(a); 

	attach_event();

	$(".card2").flip({
		axis: 'y',
		trigger: 'hover'
	});

}


$.getJSON('json/feed.json', function (data) {
	//console.log(data);
	$.each(data, function(i, field){
	    phones_array.push(field);
	});
	console.log(phones_array);
	show_phones(phones_array);
});

// Perform other work here ...
 
 


