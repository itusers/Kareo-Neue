<?php 
$title = 'Tasks';
require('_header.php'); 
?>

<div class="full container" ng-controller="tasksController">

	<ng-include src="'partials/rcm_header.html'"></ng-include>
	
	<div class="row">
		<div class="span3">
			<div class="sidebar">
				<!-- conditional ng-classes: http://jsfiddle.net/JtAZM/4/ -->
				<ul class="nav nav-pills nav-stacked">
					<li ng-class="{active: filterCriteria.bid != '0' && filterCriteria.bid == ''}"><a ng-click="filterCriteria.bid=''">Everyone's tasks</a></li>
					<li ng-class="{active: filterCriteria.bid == current_biller.id}"><a ng-click="filterCriteria.bid=current_biller.id">Tasks assigned to me</a></li>
					<li ng-class="{active: filterCriteria.bid == '0'}"><a ng-click="filterCriteria.bid=0">Unassigned tasks</a></li>
				</ul>
				<ul class="nav nav-pills nav-stacked">
					<li ng-class="{active: filterCriteria.type != '0' && filterCriteria.type == ''}"><a ng-click="filterCriteria.type=''">All types</a></li>
					<li ng-class="{active: filterCriteria.type == 1}"><a ng-click="filterCriteria.type=1">Patients</a></li>
					<li ng-class="{active: filterCriteria.type == 2}"><a ng-click="filterCriteria.type=2">Encounters</a></li>
					<li ng-class="{active: filterCriteria.type == 3}"><a ng-click="filterCriteria.type=3">Claims</a></li>
					<li ng-class="{active: filterCriteria.type == 4}"><a ng-click="filterCriteria.type=4">Payments</a></li>
				</ul>
				<!-- {{ filterCriteria }} -->
			</div>
		</div> <!-- /.sidebar -->
		
		<div class="span9 main">
			<div class="btn btn-primary pull-right">New Task</div>
			<tabs>
				<pane heading="Open Tasks">
					<div class="task" ng-class="{checked: task.checked == 1}" ng-repeat="task in tasks_open | filter:filterCriteria">
						<ng-include src="'partials/task.html'"></ng-include>
					</div>
				</pane>
				<pane heading="Completed">
					<div class="task checked" ng-class="{checked: task.checked == 1}" ng-repeat="task in tasks_closed | filter:filterCriteria">
						<ng-include src="'partials/task.html'"></ng-include>
					</div>
				</pane>
				<pane heading="Deleted">
					<div class="task" ng-repeat="task in tasks_deleted | filter:filterCriteria">
						<ng-include src="'partials/task.html'"></ng-include>
					</div>
				</pane>
			</tabs>
		</div> <!-- /.main -->
	</div>
	
</div> <!-- /.container -->

<?php require('_footer.php'); ?>