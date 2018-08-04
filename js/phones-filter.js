


function createDropdown(name, arr, color) {
	var text = `<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
	   <span class="dropdown">
	      <button type="button" class="btn btn-outline-${color} dropdown-toggle" data-toggle="dropdown">
	      <span class="all">All</span> ${name}
	      </button>
	      <ul class="dropdown-menu">
	         <form>
	            <div class="margin-l-10 checkbox" >
	            `;

	for (i =0; i < arr.length; i++) {
		text += `<label><input class="checkbox-${color}" name="${name}[]" value="${arr[i]}" type="checkbox"> ${arr[i]}  </label><br>\n`;
	}

	text +=    `</div>
	         </form>
	      </ul>
	   </span>
	</div>`;
	return text;
}



arr = ['Apple', 'Alcatel', 'CAT', 'Doro', 'Huawei', 'Mobiwire', 'Nokia', 'Samsung', 'Sony', 'Vodafone'];
var filters = createDropdown('Manufacturers', arr, 'danger');

arr = ['4G', 'HD Voice', 'Expandable memory'];
filters += createDropdown('Features', arr, 'success');

arr = ['Apple', 'Android', 'Windows', 'iOS'];
filters += createDropdown('Platforms', arr, 'primary');

arr = ['Smartphones', 'Simple phones', 'Business phones', 'info'];
filters += createDropdown('Types', arr, 'info');
 

$('#dropdowns-filters').html (filters);


 

// ==============================================================================

function updateFilterBar(colorFilter, id) {
	
	//<a href="#" class="filter-marker" data-toggle="tooltip" title="remove filter" class="exit-icon badge badge-danger"><img src="images/icon.png">All manufacturers</a>
	var manufacturers = [];
	var features = [];
	var platforms = [];
	var types = [];

	$("input[name='Manufacturers[]']:checked").each(function ()
	{
	    manufacturers.push($(this).val());
	});

	$("input[name='Features[]']:checked").each(function ()
	{
	    features.push($(this).val());
	});

	$("input[name='Platforms[]']:checked").each(function ()
	{
	    platforms.push($(this).val());
	});

	$("input[name='Types[]']:checked").each(function ()
	{
	    types.push($(this).val());
	});


	(manufacturers.length > 0) ? $('span.dropdown .btn-outline-danger>span.all').html('') : $('span.dropdown .btn-outline-danger>span.all').html('All');
	(features.length > 0) ? $('span.dropdown .btn-outline-success>span.all').html('') : $('span.dropdown .btn-outline-success>span.all').html('All');
	(platforms.length > 0) ? $('span.dropdown .btn-outline-primary>span.all').html('') : $('span.dropdown .btn-outline-primary>span.all').html('All');
	(types.length > 0) ? $('span.dropdown .btn-outline-info>span.all').html('') : $('span.dropdown .btn-outline-info>span.all').html('All');

 
	var filtr_str = '';

	$.each( manufacturers, function( index, value ){
		filtr_str += '<a href="#" data-toggle="tooltip" title="remove filter" data-va="'+value+'" data-kind="manufacturers" class="filter-marker exit-icon badge badge-danger"><img src="images/icon.png">'+value+'</a> ';
	});

	$.each( features, function( index, value ){
		filtr_str += '<a href="#" data-toggle="tooltip" title="remove filter" data-va="'+value+'" data-kind="features" class="filter-marker exit-icon badge badge-success"><img src="images/icon.png">'+value+'</a> ';
	});

	$.each( platforms, function( index, value ){
		filtr_str += '<a href="#" data-toggle="tooltip" title="remove filter" data-va="'+value+'" data-kind="platforms" class="filter-marker exit-icon badge badge-primary"><img src="images/icon.png">'+value+'</a> ';
	});

	$.each( types, function( index, value ){
		filtr_str += '<a href="#" data-toggle="tooltip" title="remove filter" data-va="'+value+'" data-kind="types" class="filter-marker exit-icon badge badge-info"><img src="images/icon.png">'+value+'</a> ';
	});

	$('#filters').html (filtr_str);


	$('#filters>a.filter-marker').on('click',  function(e){
 
		var va = $(this).data("va");
		var kind = $(this).data("kind");
		$(this).remove();

		// odswiezyc telefony
		switch (kind) {
			case 'manufacturers':
 				$("input[type=checkbox][value='"+va+"'].checkbox-danger").prop("checked",false);
 				l = $("input[type=checkbox].checkbox-danger:checked").length;
				(l > 0) ? $('span.dropdown .btn-outline-danger>span.all').html('') : $('span.dropdown .btn-outline-danger>span.all').html('All');
			break;
			case 'features':
 				$("input[type=checkbox][value='"+va+"'].checkbox-success").prop("checked",false);
 				l = $("input[type=checkbox].checkbox-success:checked").length;
				(l > 0) ? $('span.dropdown .btn-outline-success>span.all').html('') : $('span.dropdown .btn-outline-success>span.all').html('All');
			break;
			case 'platforms':
 				$("input[type=checkbox][value='"+va+"'].checkbox-primary").prop("checked",false);
 				l = $("input[type=checkbox].checkbox-primary:checked").length;
				(l > 0) ? $('span.dropdown .btn-outline-primary>span.all').html('') : $('span.dropdown .btn-outline-primary>span.all').html('All');
			break;
			case 'types':
 				$("input[type=checkbox][value='"+va+"'].checkbox-info").prop("checked",false);
 				l = $("input[type=checkbox].checkbox-info:checked").length;
				(l > 0) ? $('span.dropdown .btn-outline-info>span.all').html('') : $('span.dropdown .btn-outline-info>span.all').html('All');
			break;
		}
	});
}
 






$('.checkbox-danger').change(function (e) {
    var id = $(this).val();
    updateFilterBar('checkbox-manufacturers', id);
});

$('.checkbox-success').change(function (e) {
    var id = $(this).val(); 
    updateFilterBar('checkbox-features', id);
});

$('.checkbox-primary').change(function (e) {
    var id = $(this).val(); 
    updateFilterBar('checkbox-platforms', id);
});

$('.checkbox-info').change(function (e) {
    var id = $(this).val(); 
    updateFilterBar('checkbox-types', id);
});


