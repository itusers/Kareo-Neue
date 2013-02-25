<?php 
$title = 'Encounter Lifecycle';
require('_header.php'); 
?>

	<div id="nav">
		<a class="menu-item" href="#"><span class="icon">&#128711;</span>Dashboard</a>
		<a class="menu-item" href="#"><span class="icon">&#128100;</span>Patients</a>
		<a class="menu-item" href="#"><span class="icon">&#128197;</span>Calendar</a>
		<a class="menu-item active" href="#"><span class="icon">&#128203;</span>Encounters</a>
		<a class="menu-item" href="#"><span class="icon">&#10003;</span>Tasks</a>
		<a class="menu-item" href="#"><span class="icon">&#128202;</span>Reports</a>
		<a class="menu-item" href="#"><span class="icon">&#59190;</span>Documents</a>
	</div>
	
	<header>
		This is the header
		<form class="form-search pull-right">
			<input type="text" class="input-xlarge search-query">
		</form>
	</header>
	
	<div id="subnav">
		<h2>Joe Ayoob's visit</h2>
		<button class="btn btn-primary">Assigned to Neil C.</button>
		
		<h3>Lifecycle</h3>
		<a href="#"><span class="icon">&#128197;</span>Appointment</a>
		<a href="#"><span class="icon">&#128203;</span>Encounter</a>
		<a href="#" class="disabled"><span class="icon">&#128214;</span>Claims</a>
		<a href="#" class="disabled"><span class="icon">&#128179;</span>Payments</a>
	</div>
	
	<div id="content" ng-controller="lifecycleController">
		<div class="enc_container">
			<div class="enc_item">
				<h2>Appointment</h2>

				<div class="col">
					<p><label>ID</label>
					{{ encounter.id }}</p>
					
					<p><label>Case</label>
					{{ encounter.case }}</p>
					
					<p><label>Prior Authorization</label>
					{{ encounter.prior }}</p>
				</div>
				
				<div class="col">
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
			
			<div class="enc_item">
				<h2>Encounter</h2>
				{{ claims }}
			</div>
		</div> <!-- /.enc_container -->
		
		<div id="enc_hud">
			<div class="current_step">Encounter</div>
			<div class="current_icons">&nbsp;</div>
			<div class="current_tasks">&nbsp;</div>
		</div> <!-- /#enc_hud -->
	</div> <!-- /#content -->


<?php require('_footer.php'); ?>