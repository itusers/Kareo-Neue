<?php 
$title = 'RCM Prototype';
require('_header.php'); 
?>

<div class="container">

	<header>
		Dashboard
	</header>
	
	<div class="navbar">
	  <div class="navbar-inner">
	    <ul class="nav">
	      <li class="active"><a href="#">Home</a></li>
	      <li><a href="#">Link</a></li>
	      <li><a href="#">Link</a></li>
	    </ul>
	  </div>
	</div> <!-- /.navbar -->
	
	<div class="row" ng-controller="rcmController">
		<div class="span4" ng-repeat="encounter in encounters">
			<div class="card">
				<div>{{ encounter.status }}</div>
				<div>{{ encounter.amount | currency }}</div>
				<div>{{ getContact(encounter) }}</div>
			</div>
		</div>
	</div>

</div> <!-- /.container -->

<?php require('_footer.php'); ?>