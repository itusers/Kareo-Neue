<?php 
	$id = 'denials';
	$title = 'Denial Claims';
	require_once('_header.php'); 
?>

<div class="container" ng-controller="DenialController">

	<div class="row">
		<div class="col-12">
			<div class="alert alert-warning">
				<strong>15 days left</strong> until estimated filing deadline
			</div>			
		</div>

		<section class="col-8">	
			<div ng-repeat="patient in patients">
				<div ng-class="{current: $first }" class="patient wrapper">
					<div class="stamp stamp-appeal">
						<i class="icon-bolt"></i> Appealed
					</div>
					<div class="stamp stamp-snooze">
						<i class="icon-time"></i> Snoozed for 
						<br /><span class="val">5</span> days
					</div>
					<div class="stamp stamp-settle">
						<i class="icon-legal"></i> Settled
					</div>
					<div class="stamp stamp-reassign">
						<i class="icon-user"></i> Reassigned to 
						<br /><span class="val">Jason Leu</span>
					</div>
					<div class="stamp stamp-resubmit">
						<i class="icon-refresh"></i> Resubmitted
					</div>

					<div class="panel bot-10 open">
						<div class="panel-heading">
							<h2 class="panel-title">
								<i class="icon-pencil edit pull-right"></i>
								<i class="icon-{{patient.gender}}"></i> {{patient.first}} {{patient.last}}
							</h2>
						</div>
						<div class="list-group-flush pad pad-left row">
							<div class="col-6 smalltext">
								DOB <strong>{{prettydate(patient.dob)}}</strong>
								<br />SSN <strong>{{patient.ssn}}</strong>
							</div>
							<div class="col-6 smalltext">
								Policy # <strong>{{patient.policy}}</strong>
								<br />Group # <strong>{{patient.group}}</strong>
							</div>
						</div>
					</div>

					<div class="panel bot-10 open">
						<div class="panel-heading">
							<h2 class="panel-title">
								<i class="icon-pencil edit pull-right"></i>
								<i class="icon-medkit"></i> Encounter #2507
							</h2>
						</div>
						<div class="list-group-flush controls">
							<div class="row">
								<div class="col-12 pad">
									<div class="descriptor">Labels</div>
									
									<div class="btn-group">
										<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown"><span ng-bind-html-unsafe="tag1"></span> <i class="icon-angle-down"></i></button>
										<ul class="dropdown-menu">
											<li class="dropdown-header">Custom Status</li>
											<li><a ng-click="tag1 = 'Awaiting EOB'">Awaiting EOB</a></li>
											<li><a ng-click="tag1 = 'To Appeal'">To Appeal</a></li>
											<li><a ng-click="tag1 = 'Appealed'">Appealed</a></li>
											<li><a ng-click="tag1 = 'Support Docs Needed'">Support Docs Needed</a></li>
											<li><a ng-click="tag1 = selectTag('Custom Status', 'title')">None</a></li>
										</ul>	
									</div> <!-- /.btn-group -->

									<div class="btn-group">
										<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown"><span ng-bind-html-unsafe="tag2"></span> <i class="icon-angle-down"></i></button>
										<ul class="dropdown-menu">
											<li class="dropdown-header">Importance</li>
											<li><a ng-click="tag2 = 'High'">High</a></li>
											<li><a ng-click="tag2 = 'Medium'">Medium</a></li>
											<li><a ng-click="tag2 = 'Low'">Low</a></li>
											<li><a ng-click="tag2 = selectTag('Importance', 'title')">None</a></li>
										</ul>	
									</div> <!-- /.btn-group -->
								</div>
							</div>
						</div>
						<div class="list-group-flush pad">
							<div class="lifecycle">
								<!-- DOS -->
								<i class="icon-circle text-muted" style="left: 0%;" data-toggle="tooltip" title="<strong>Date of Service</strong> {{prettydate(patient.dos)}}"></i>
								<!-- Estimated filing deadline -->
								<i class="icon-frown text-danger" style="left: 98%;" data-toggle="tooltip" title="<strong>Filing Deadline</strong> {{deadlinefromdate(patient.dos)}}"></i>
								<!-- TODAY -->
								<i class="icon-map-marker text-success icon-2x" style="left: 83%;" data-toggle="tooltip" title="<strong>TODAY</strong>"></i>

								<!-- Claim submissions -->
								<i class="icon-circle-blank text-primary" style="left: 18%;" data-toggle="tooltip" title="<strong>Submission</strong> 8/16/2013"></i>
								<i class="icon-circle-blank text-primary" style="left: 44%;" data-toggle="tooltip" title="<strong>Submission</strong> 9/19/2013"></i>
								<i class="icon-circle-blank text-primary" style="left: 70%;" data-toggle="tooltip" title="<strong>Submission</strong> 10/7/2013"></i>
								<!-- Claim rejections -->
								<i class="icon-remove text-danger" style="left: 25%;" data-toggle="tooltip" title="<strong>Rejection</strong> 8/20/2013"></i>
								<!-- Claim denials -->
								<i class="icon-ban-circle text-danger" style="left: 75%;" data-toggle="tooltip" title="<strong>Denial</strong> 10/11/2013"></i>
			
								<div class="progress progress-striped">
									<div class="progress-bar progress-bar-warning" style="width: 25%"></div>
								</div>
							</div> <!-- /.lifecycle -->
						</div>

						<div class="list-group-flush pad claims">
							<h3>Claims</h3>
							<table class="table table-hover">
								<thead>
								  <tr>
								    <th>&nbsp;</th>
								    <th>DOS</th>
								    <th>Procedure</th>
								    <th>Amount</th>
								  </tr>
								</thead>
								<tbody>
								  <tr>
								    <td><i class="icon-ok text-success"></i></td>
								    <td>{{prettydate(patient.dos)}}</td>
								    <td>99214</td>
								    <td>$136.00</td>
								  </tr>
								  <tr>
								    <td><i class="icon-ban-circle text-danger"></i></td>
								    <td>{{prettydate(patient.dos)}}</td>
								    <td>36415</td>
								    <td>$257.00</td>
								  </tr>
								  <tr>
								    <td><i class="icon-ban-circle text-danger"></i></td>
								    <td>{{prettydate(patient.dos)}}</td>
								    <td>83036</td>
								    <td>$312.00</td>
								  </tr>
								</tbody>
							</table>
						</div>

						<div class="list-group-flush pad history">
							<h3>Activity History</h3>
							<div class="history-inner">
								<div class="row">
									<div class="col-2 date">{{prettydate(patient.dos)}}</div>
									<div class="col-1 timeline"><i class="icon-circle text-muted"></i></div>
									<div class="col-9">Date of service</div>
								</div>
								<div class="row">
									<div class="col-2 date">8/16/2013</div>
									<div class="col-1 timeline"><i class="icon-circle-blank text-primary"></i></div>
									<div class="col-9">Claim submitted by Abe Yang</div>
								</div>
								<div class="row">
									<div class="col-2 date text-danger">8/20/2013</div>
									<div class="col-1 timeline"><i class="icon-remove text-danger"></i></div>
									<div class="col-9 text-danger"><strong>Rejected</strong>. Aenean lacinia bibendum nulla sed onsectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
								</div>
								<div class="row">
									<div class="col-2 date">8/21/2013</div>
									<div class="col-1 timeline"><i class="icon-comment"></i></div>
									<div class="col-9"><strong>Jason Leu</strong>: Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</div>
								</div>
								<div class="row">
									<div class="col-2 date">8/21/2013</div>
									<div class="col-1 timeline"><i class="icon-pencil"></i></div>
									<div class="col-9">Edited claim line-item by Jason</div>
								</div>
								<div class="row">
									<div class="col-2 date">9/19/2013</div>
									<div class="col-1 timeline"><i class="icon-circle-blank text-primary"></i></div>
									<div class="col-9">Claim submitted by Jason Leu</div>
								</div>
								<div class="row today">
									<div class="col-2 date">Today</div>
									<div class="col-1 timeline"><i class="icon-comment"></i></div>
									<div class="col-9">
										<textarea class="form-control" rows="2" placeholder="Write a comment"></textarea>
										<button type="button" class="btn btn-primary">Comment</button>
									</div>
								</div>
							</div> <!-- /.history-inner -->

						</div>
					</div> <!-- /.panel -->

				</div> <!-- /.patient.wrapper -->
			</div>
		</section>

		<!-- <aside class="col-4" data-spy="affix" data-offset-top="90"> -->
		<aside class="col-4">
			<div class="panel bot-10 open">
				<div class="panel-heading">
					<h3 class="panel-title"><i class="icon-exclamation-sign"></i> CO-140</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					<strong>CO-140</strong> Patient/Insured health identification number and name do not match.		
				</div>
			</div>

			<div class="panel bot-10">
				<div class="panel-heading">
					<h3 class="panel-title">
						<span class="pull-right">1-800-123-4456 <i class="icon-pencil edit"></i></span>
						<i class="icon-building"></i> Aetna Health
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					Estimated time for filing: 90 days	
				</div>
			</div>

			<div class="panel bot-10">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="icon-pencil edit pull-right"></i>
						<i class="icon-home"></i> Davenport Medical Clinic
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					Group NPI <strong>199457851</strong>
					<br />EIN <strong>45-584562</strong>
				</div>
			</div>

			<div class="panel bot-10">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="icon-pencil edit pull-right"></i>
						<i class="icon-user-md"></i> Randy Sinnott, DO
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					NPI <strong>123456789</strong>
				</div>
			</div>
		</aside>
	</div>

	<div class="navbar navbar-fixed-bottom">
		<div class="container">
			<div class="row">
				<div class="col-8">
					<div id="denial-actions" class="btn-group btn-group-justified">
						<a href="#" id="appeal" class="btn btn-large btn-default action"><i class="icon-bolt"></i> Appeal</a>
						<a id="snooze" class="btn btn-large btn-default action"><i class="icon-time"></i> Snooze</a>
						<a href="#" id="settle" class="btn btn-large btn-default action"><i class="icon-legal"></i> Settle</a>
						<a href="#" id="reassign" class="btn btn-large btn-default action"><i class="icon-user"></i> Reassign</a>
						<a href="#" id="resubmit" class="btn btn-large btn-default action"><i class="icon-refresh"></i> Resubmit</a>
					</div>				
				</div>
			</div>
		</div>
	
	</div>


</div>
<?php require_once('_footer.php'); ?>