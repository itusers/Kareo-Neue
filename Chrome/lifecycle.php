<?php 
$title = 'Encounter Lifecycle';
require('_header.php'); 
?>

	<!-- NAVIGATION -->
	<div id="nav">
		<a class="menu-item" href="#"><span class="icon">&#128711;</span>Dashboard</a>
		<a class="menu-item" href="#"><span class="icon">&#128100;</span>Patients</a>
		<a class="menu-item" href="#"><span class="icon">&#128197;</span>Calendar</a>
		<a class="menu-item active" href="#"><span class="icon">&#128203;</span>Encounters</a>
		<a class="menu-item" href="#"><span class="icon">&#10003;</span>Tasks</a>
		<a class="menu-item" href="#"><span class="icon">&#128202;</span>Reports</a>
		<a class="menu-item" href="#"><span class="icon">&#59190;</span>Documents</a>
	</div>

	<!-- HEADER -->	
	<header>
		This is the header
		<form class="form-search pull-right">
			<input type="text" class="input-xlarge search-query">
		</form>
	</header>

	<!-- SUB-NAVIGATION -->	
	<div id="subnav">
		<h2>Joe Ayoob's visit</h2>
		<button class="btn btn-secondary">Assigned to Neil C. <span class="icon">&#59232;</span></button>
		
<!--
		<tabs>
			<pane heading="Navigation">
-->
				<h3>Lifecycle</h3>
				<a href="#"><span class="icon">&#128197;</span>Appointment</a>
				<a href="#" class="active"><span class="icon">&#128203;</span>Encounter</a>
				<a href="#" class="disabled"><span class="icon">&#128214;</span>Claims</a>
				<a href="#" class="disabled"><span class="icon">&#128179;</span>Payments</a>
				
<!--
			</pane>
			<pane heading="Tasks">blah blah bha</pane>
		</tabs>
-->

		<h3>Tasks</h3>
		
		Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.

	</div>
	
	<!-- CONTENT AREA -->
	<div id="content" ng-controller="lifecycleController">
		<div class="enc_container">
			<div class="enc_item">
				<h2>Appointment</h2>
				
				<div class="row-fluid">
					<div class="span6">
						<p><span class="icon">&#128197;</span> {{ encounter.date | date:'longDate' }}</p>
						<p><span class="icon">&#128340;</span> {{ encounter.time_start }}-{{ encounter.time_end }}</p>
						<p><span class="icon">&#59172;</span> {{ encounter.location }}</p>
					</div>
					
					<div class="span6">
						<!-- need to revisit -->
						<p><label>Assigned Provider</label>
							{{ encounter.provider_id }}</p> 
						
						<p><label>Reasons</label>
							{{ encounter.reasons }}</p> 
					</div>
				</div>
				
				<div class="clearfix pull-right">
					<button class="btn btn-secondary"><span class="icon">&#9998;</span> Edit</button>
				</div>
			</div>
			
			<div class="enc_item">
				<h2>Encounter</h2>

				<div class="row-fluid">
					<div class="span6">
						<p><label>ID</label>
						{{ encounter.id }}</p>
						
						<p><label>Case</label>
						{{ encounter.case }}</p>
						
						<p><label>Prior Authorization</label>
						{{ encounter.prior }}</p>
					</div>
					
					<div class="span6">
						<p><label>Primary Insurance</label>
						{{ encounter.primary_insurance }}</p>
						
						<p><label>Billed Primary As</label>
						{{ encounter.primary_billas }}</p>
						
						<p><label>Secondary Insurance</label>
						{{ encounter.secondary_insurance }}</p>
						
						<p><label>Billed Secondary As</label>
						{{ encounter.secondary_billas }}</p>
					</div>
				</div>
			</div>
			
			<div class="enc_item">
				<h2>Procedures</h2>
				
				<div class="claim row-fluid" ng-repeat="claim in claims">
					<div class="info span9">
						<div><strong>{{ claim.code }}</strong> on {{ claim.date | date:'longDate' }}</div>
						<div class="desc">{{ claim.desc }}</div>
					</div>
					<div class="amount span3">{{ claim.amount | currency }}</div>
				</div> <!-- /.claim -->
				
				<div class="claim total row-fluid">
					<div class="info span9">Total</div>
					<div class="amount span3">{{ totalAmount | currency }}</div>
				</div> <!-- /.claim.total -->
				
			</div>
		</div> <!-- /.enc_container -->
		
<!--		<div id="enc_hud">
			<div class="current_step">Encounter</div>
			<div class="current_icons">&nbsp;</div>
			<div class="current_tasks">&nbsp;</div>
		</div> <!-- /#enc_hud -->
	</div> <!-- /#content -->


<?php require('_footer.php'); ?>