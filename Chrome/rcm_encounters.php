<?php 
$title = 'Encounter';
require('_header.php'); 
?>

<div class="full container" ng-controller="encountersController">

	<ng-include src="'partials/rcm_header.html'"></ng-include>
	
	<div class="row">
		<div class="span4 sidebar">
			Sidebar
		</div> <!-- /.sidebar -->
		
		<div class="span8 main">
			<div class="row" ng-repeat="encounter in encounters">
				<div class="span1 avatar" ng-bind-html-unsafe="getAvatar(encounter)">
				</div>
				<div class="span7">
					<a href="#" class="card">
		
							<div ng-bind-html-unsafe="getStatus(encounter)"></div>
							<div class="amount">{{ encounter.amount | currency }}</div>
							<div class="content">
								<span>{{ getContact(encounter) }}
									<span class="subtext">
										<span class="entypo">&#128197;</span> {{ encounter.date_created | date:'shortDate' }} 
									</span>
									<span class="subtext">
										<span class="entypo">&#59160;</span> {{ encounter.comments }} 
									</span>
								</span>
								<div class="subtext gray">
									{{ getPractice(encounter) }}
								</div>
							</div>
		
					</a>
				</div>
			</div>
		</div> <!-- /.main -->
	</div>

</div> <!-- /.container -->

<?php require('_footer.php'); ?>