<?php 
	$id = 'denials';
	$title = 'Denials Overview';
	require_once('_header.php'); 
?>

<!-- Working through Claim Denials -->

<div class="container" ng-controller="DenialsListController">

	<div class="row">
		<aside class="col-3">
			<div class="descriptor pad">Group by</div>
			<ul class="nav nav-pills nav-stacked">
				<li class="active"><a href="#">Remark codes <i class="icon-arrow-right"></i> Insurance</a></li>
				<li><a href="#">Insurance <i class="icon-arrow-right"></i> Remark codes</a></li>
			</ul>

			<hr />

			<div class="descriptor pad">Sort by</div>
			<ul class="nav nav-pills nav-stacked">
				<li class="active"><a href="#">Highest dollar amount</a></li>
				<li><a href="#">Most outstanding claims</a></li>
				<li><a href="#">Nearest filing deadline</a></li>
			</ul>

			<hr />

			<div class="descriptor pad">Show claims from</div>
			<ul class="nav nav-pills nav-stacked">
				<li class="active"><a href="#">All your practices</a></li>
				<li ng-repeat="practice in practices"><a href="#">{{ practice.name }}</a></li>
			</ul>

<!-- 			<hr />

			<div class="descriptor pad">Filter by</div>
			
			<select class="form-control">
				<option>All Custom Status Tags</option>
				<option>Awaiting EOB</option>
				<option>To Appeal</option>
				<option>Support Docs Needed</option>
			</select>
			<br />
			<select class="form-control">
				<option>All Importance Tags</option>
				<option>High</option>
				<option>Medium</option>
				<option>Low</option>
			</select> -->

		</aside>
		
		<section id="overview" class="col-9">
			
			<div class="panel" ng-repeat="remark in remarks">
				<!-- Default panel contents -->
				<div class="panel-heading">
					<div class="list-info list-amount">{{ remark.amount }}</div>
					<div class="list-info list-encounters">{{ remark.enc }}</div>
					<strong>{{ remark.code }}</strong> {{ remark.desc }}
				</div>
				<!-- List group -->
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						<div class="list-info list-amount">$630</div>
						<div class="list-info list-encounters">30</div>
						Aetna Health</li>
					<li class="list-group-item">
						<div class="list-info list-amount">$470</div>
						<div class="list-info list-encounters">35</div>
						Medicare</li>
					<li class="list-group-item">
						<div class="list-info list-amount">$300</div>
						<div class="list-info list-encounters">23</div>
						American Family Insurance</li>
					<li class="list-group-item">
						<div class="list-info list-amount">$280</div>
						<div class="list-info list-encounters">16</div>
						Kaiser Permanente</li>
					<li class="list-group-item">
						<div class="list-info list-amount">$110</div>
						<div class="list-info list-encounters">9</div>
						United Health Group</li>
				</ul>
			</div>

		</section>
	</div>

</div>

<?php require_once('_footer.php'); ?>