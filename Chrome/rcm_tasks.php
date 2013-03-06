<?php 
$title = 'Tasks';
require('_header.php'); 
?>

<div class="full container" ng-controller="tasksController">

	<ng-include src="'partials/rcm_header.html'"></ng-include>
	
	<div class="row">
		<div class="span4 sidebar">
			Sidebar
		</div> <!-- /.sidebar -->
		
		<div class="span8 main">
			<tabs>
				<pane heading="Open">
					<div class="row" ng-repeat="task in tasks">
						<div class="span1"><input type="checkbox" /></div>

						<div class="span7">
							<div class="avatar small" ng-bind-html-unsafe="getAvatar(task)"></div>
							{{ task.title }}
						</div>
					</div>
				</pane>
				<pane heading="Closed"></pane>
				<pane heading="Deleted"></pane>
			</tabs>
		</div> <!-- /.main -->
	</div>

</div> <!-- /.container -->

<?php require('_footer.php'); ?>