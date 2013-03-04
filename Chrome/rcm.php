<?php 
$title = 'RCM Prototype';
require('_header.php'); 
?>

<div class="full container">

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
		<div class="span4 sidebar">
			Sidebar
		</div> <!-- /.sidebar -->
		
		<div class="span8 main">
			<div class="row" ng-repeat="encounter in encounters">
				<div class="span1 avatar" ng-bind-html-unsafe="getAvatar(encounter)">
				</div>
				<div class="span7">
					<div class="card">
		
							<div ng-bind-html-unsafe="getStatus(encounter)"></div>
							<div class="amount">{{ encounter.amount | currency }}</div>
							<div class="content">
								{{ encounter.date_created | date:'shortDate' }} {{ getContact(encounter) }}
								<div class="subtext">
									{{ getAccountPractice(encounter) }}
								</div>
							</div>
		
					</div>
				</div>
			</div>
		</div> <!-- /.main -->
	</div>

</div> <!-- /.container -->

<?php require('_footer.php'); ?>