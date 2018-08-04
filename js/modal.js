
function getColors(ob) {
	if (typeof ob.colors !== 'undefined') {
		return '<nobr><small><b>Colors</b>: '+ob.colors.toString().replace(/,/g, ", ")+'</small></nobr>';
	}
	else {
		return '';
	}
}

function getPrice(price) {
	if (price == '0') {
		return "Free";
	}
	else {
		return "From €"+price;
	}
}

function getFeatures(features){
	keys = Object.keys(features);
	var result = '';
	for (i=0; i<keys.length; i++) {
		 console.log(features[keys[i]] );
		if (features[keys[i]] == true) {
			result += keys[i]+ ', ';
		}		
	}
	return result.slice(0,-2);
//Object.keys(phones_array[id].filterfeatures).toString().replace(/,/g, ", ")
}


function attach_event() {
	$('.phone-tile').on('click',  function(){
		id = $(this).data("id");
		var msg = `
		    <div class="row">
		       <div class="col-xl-12 col-lg12 col-md-12 col-sm-12 col-xs-12">
		          <div class="card3" style="float:left">
		             <div class="front"> 
		                <img width="200" height="340" src="${phones_array[id].imageFront}"> 
		             </div>
		             <div class="back">
		                <img width="200" height="340" src="${phones_array[id].imageBack}">
		             </div>
		          </div>                  
		          <p><b>Description</b></p>
		          
		          <p style="text-align: justify; padding-right: 10px;">
		             ${phones_array[id].productDescription}
		          </p>
		          <p>               
		          	<nobr><small><b>Screen sizes</b>: ${phones_array[id].sortfeatures['Screen size'][0]/1000}", <b>Ratings</b>: ${parseFloat(phones_array[id].sortfeatures.Ratings[0]).toFixed(2)} </small></nobr>
		          	${getColors(phones_array[id])}
		          </p>

		          <small><b>features:</b> ${getFeatures(phones_array[id].filterfeatures)}</small></p>
		          <p style="float:left;" class="text-danger">Price: <b>${getPrice(phones_array[id].priceFrom)}</b></p>
				  <button style="float:right;" type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		       </div>
		    </div>
		`;

		var dialog = bootbox.dialog({
			title: phones_array[id].description,
			message: msg,
			backdrop: true,
			size: 'large'

		});

		$(".card3").flip({
			axis: 'y',
			trigger: 'hover'
		});

	});

}


