
function attach_event() {
	$('.phone-tile').on('click',  function(e){
		var msg = `
		    <div class="row">

		       <div class="col-xl-12 col-lg12 col-md-12 col-sm-12 col-xs-12">
		          <div class="card3" style="float:left">
		             <div class="front"> 
		                <img src="images/I712B_FRONT.png"> 
		             </div>
		             <div class="back">
		                <img src="images/I712B_BACK.png">
		             </div>
		          </div>                  
		          <p><b>Description</b></p>
		          
		          <p style="text-align: justify; padding-right: 10px;">
		             Product description text goes here. Amend how you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan aliquet purus at pellentesque. Vivamus congue tortor vel metus imperdiet, at fermentum quam vehicula. Quisque ac nunc dolor. Proin non scelerisque nulla. Nam fermentum ex ac erat vehicula porttitor. Nulla id purus massa.
		          </p>
		          <p>               
		          	<nobr><small><b>Screen sizes</b>: 1.123, <b>Battery Life</b>: 1.13, <b>Ratings</b>: 5.5,</small></nobr>
					<nobr><small><b>Colors</b>: Rose Gold, Silver, Gold, Black, Jet Black</small></nobr>

		          </p>
		          <small><b>features:</b> 3G, Android, Bluetooth, Camera, Email, FM radio, Internet browser, MP3 player, Picture messaging, Smartphone, Touchscreen, Video messaging, Video recording, WiFi, Large keys, Memory card, QWERTY keyboard</small></p>
		          <p style="float:left;" class="text-danger">Price: <b>from €5.55</b></p>
				  <button style="float:right;" type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		       </div>
		    </div>
		`;

		var dialog = bootbox.dialog({
			title: 'Vodafone Smart first 7',
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


