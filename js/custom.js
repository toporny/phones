$("#card").flip({
	axis: 'y',
	trigger: 'hover'
});

$(".card2").flip({
	axis: 'y',
	trigger: 'hover'
});



// create dropdown filters



// 'Apple', 'Alcatel', 'CAT', 'Doro', 'Huawei', 'Mobiwire', 'Nokia', 'Samsung', 'Sony', 'Vodafone'
// '
// '4G'
// 'HD Voice'
// 'Expandable memory'
 
// 'Apple'
// 'Android'
// 'Windows'
// 'iOS'
//, 'Apple', 'Android', 'Windows', 'iOS'

// 'Smartphones'
// 'Simple phones'
// 'Business phones;

 

//createDropdown('Manufacturers', a)


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
				text += `<label><input class="checkbox-${color}" name="${name}" value="${arr[i]}" type="checkbox"> ${arr[i]}  </label><br>\n`;
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
filters += createDropdown('Types', arr);
 

$('#dropdowns-filters').html (filters);



// ==============================================================================

function updateFilterBar(color, id) {
	console.log(color, id);

}
 


$('.checkbox-danger').change(function (e) {
    var id = $(this).val();
    updateFilterBar('checkbox-danger', id);
});

$('.checkbox-success').change(function (e) {
    var id = $(this).val(); 
    updateFilterBar('checkbox-success', id);
});

$('.checkbox-primary').change(function (e) {
    var id = $(this).val(); 
    updateFilterBar('checkbox-primary', id);
});

$('.checkbox-info').change(function (e) {
    var id = $(this).val(); 
    updateFilterBar('checkbox-info', id);
});