'use strict';

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
       <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Type model here" aria-label="Type model/manufacturer">
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
       </form>
    </div>
 </nav>
`;

$('header').html(header1); 