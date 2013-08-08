<?php 
	$id = 'encounters';
	$title = 'Draft Encounters';
	require_once('_header.php'); 
?>

<!-- Working through Draft Encounters -->

<!-- <div class="container" ng-controller="DraftEncountersController"> -->
<div class="container" ng-controller="DenialController">

	<div class="row">
		<section class="col-8">	
			<div ng-repeat="patient in patients">
				<div ng-class="{current: $first }" class="patient card">
					<div class="stamp stamp-approve">
						<i class="icon-thumbs-up"></i> Approved
					</div>
					<div class="stamp stamp-reassign">
						<i class="icon-user"></i> Reassigned to 
						<br /><span class="val">Jason Leu</span>
					</div>

					<div class="header pad row">
						<h2 class="col-6"><i class="icon-{{patient.gender}}"></i> {{patient.first}} {{patient.last}} <i class="icon-pencil edit"></i></h2> 
						<div class="col-3 smalltext">
							DOB <strong>{{prettydate(patient.dob)}}</strong>
							<br />SSN <strong>{{patient.ssn}}</strong>
						</div>
						<div class="col-3 smalltext">
							Policy # <strong>{{patient.policy}}</strong>
							<br />Group # <strong>{{patient.group}}</strong>
						</div>
					</div> <!-- /.row -->

					<div class="pad">
						<div class="alert alert-danger">
							<strong>Payer Address</strong> is missing
							<br /><strong>Rendering location</strong> is missing
						</div>
						<div class="lifecycle">
							<!-- DOS -->
							<i class="icon-circle text-muted" style="left: 0%;" data-toggle="tooltip" title="<strong>Date of Service</strong> {{prettydate(patient.dos)}}"></i>
							<!-- Estimated filing deadline -->
							<i class="icon-frown text-danger" style="left: 98%;" data-toggle="tooltip" title="<strong>Filing Deadline</strong> {{deadlinefromdate(patient.dos)}}"></i>
							<!-- TODAY -->
							<i class="icon-map-marker text-success icon-2x" style="left: 13%;" data-toggle="tooltip" title="<strong>TODAY</strong>"></i>
		
							<div class="progress progress-striped">
								<!-- <div class="progress-bar progress-bar-warning" style="width: 25%"></div> -->
							</div>
						</div> <!-- /.lifecycle -->
					</div>

					<div class="pad claims">
						<h3>Claims <i class="icon-pencil edit"></i></h3>
						<table class="table table-hover">
							<thead>
							  <tr>
							    <th>DOS</th>
							    <th>Procedure</th>
							    <th>Mods</th>
							    <th>Diagnoses</th>
							    <th>Amount</th>
							  </tr>
							</thead>
							<tbody>
							  <tr>
							    <td>{{prettydate(patient.dos)}}</td>
							    <td>845.00</td>
							    <td>&nbsp;</td>
							    <td>99214</td>
							    <td>$136.00</td>
							  </tr>
							  <tr>
							    <td>{{prettydate(patient.dos)}}</td>
							    <td>36415</td>
							    <td>&nbsp;</td>
							    <td>V25.09</td>
							    <td>$257.00</td>
							  </tr>
							</tbody>
						</table>
					</div>

					<div class="pad history">
						<h3>Activity History</h3>
						<div class="history-inner">
							<div class="row">
								<div class="col-2 date">{{prettydate(patient.dos)}}</div>
								<div class="col-1 timeline"><i class="icon-circle text-muted"></i></div>
								<div class="col-9">Date of service</div>
							</div>
							<div class="row today">
								<div class="col-2 date">Today</div>
								<div class="col-1 timeline"><i class="icon-comment"></i></div>
								<div class="col-9">
									<textarea class="form-control" rows="2"></textarea>
									<button type="button" class="btn btn-primary" disabled="disabled">Add comment</button>
								</div>
							</div>
						</div> <!-- /.history-inner -->
					</div>
				</div> <!-- /.patient.card -->
			</div>
		</section>

		<aside class="col-4">
			<div class="card">
				<div class="pad">
					<div class="descriptor">Remark Code</div>
					<h2>CO-140</h2>
					<p>Patient/Insured health identification number and name do not match.</p>
				</div>
			</div>
			<div class="card">
				<div class="pad">
					<div class="descriptor">Insurance</div>
					<h2>Aetna Health</h2>
					<h3>1-800-123-4456</h3>
					<p>Estimated time for filing: 90 days</p>
				</div>
			</div>

			<div class="nocard">
				<div class="meta-info">
					<i class="icon-home main-icon"></i>
					<p>
						<h4>Davenport Medical Clinic <i class="icon-pencil edit"></i></h4>
						Group NPI <strong>199457851</strong>
						<br />EIN <strong>45-584562</strong>
					</p>
				</div>
				<div class="meta-info">
					<i class="icon-user-md main-icon"></i>
					<p>
						<h4>Randy Sinnott, DO <i class="icon-pencil edit"></i></h4>
						NPI <strong>123456789</strong>
					</p>
				</div>
				
			</div>
		</aside>
	</div>

	<div class="navbar navbar-fixed-bottom">
		<div class="container">
			<div class="row">
				<div class="col-8">
					<div class="btn-group btn-group-justified">
						<a href="#" id="settle" class="btn btn-large btn-default action" disabled="disabled"><i class="icon-thumbs-up"></i> Approve</a>
						<a href="#" id="reassign" class="btn btn-large btn-default action"><i class="icon-user"></i> Reassign</a>
					</div>				
				</div>
			</div>
		</div>
	
	</div>

</div>

<?php require_once('_footer.php'); ?>