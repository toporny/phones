'use strict';

// template
var header1 = `
 <!-- Fixed navbar -->
 <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img class="navbar-brand" src="images/vodafone_logo.png" width="30">Vodafone</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
       <ul class="navbar-nav mr-auto">
          <li class="nav-item">
             <a class="nav-link" href="#">Phones list</a>
          </li>
       </ul>
       <form id="search_model" class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Type model here" aria-label="Type model/manufacturer">
          <button id="search_phone" class="btn btn-outline-danger my-2 my-sm-0" type="button">Search</button>
       </form>
    </div>
 </nav>
`;

$('header').html(header1);




// do_manual_search()

// - removes all filters
// - shows everything if empty string
// - tries to find even is user typed " 64GB 6s iPhone Plus " instead "iPhone 6s Plus 64GB" 
// - removes all phones with "outOfStock" status = true

function do_manual_search() {
  var manual_search = [];
  var word_to_find = $('#search_model>input').val().trim().toLowerCase();
  if (word_to_find.toLowerCase().trim() == '') {
    redrawPhones();
    return;
  }

  var words = [];
  words = word_to_find.split(" ");

  // try to find each word separately
  for (var i = 0; i < dataPhones.length; i++) {
    var found = 0;
    for (var w = 0; w < words.length; w++) {
      if ((dataPhones[i].outOfStock == false) && (dataPhones[i].description.toLowerCase().indexOf(words[w]))  != -1) {
        found++;
      }
    }
    if (w > 4) break; // break if someone type too much words
    if (found == words.length) manual_search.push(dataPhones[i]);
  }

  //console.log(manual_search);
  if (manual_search.length == 0) {
    bootbox.alert({
      message: "Nothing found!",
      size: 'small'
    });
    return;
  }
  manufacturers = [];
  features = [];
  platforms = [];
  types = [];
  refreshFilterBar();
  show_phones(manual_search);  
}


// search click
$('#search_model>button').on('click',  function(e){
  do_manual_search();
});


// enter pressed
$('#search_model>input').keypress(function (e) {
  if (e.which == 13) {
    do_manual_search();
    return false;
  }
});