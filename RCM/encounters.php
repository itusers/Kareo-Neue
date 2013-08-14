<?php 
	$id = 'encounters';
	$title = 'Draft Encounters';
	require_once('_header.php'); 
?>

<!-- Working through Draft Encounters -->

<!-- <div class="container" ng-controller="DraftEncountersController"> -->
<div class="container" ng-controller="DenialController">
	<div class="alert alert-danger text-center">
		<span class="text-danger">2 Errors</span>, <span class="text-warning">1 Warning</span>
	</div>

	<div class="row">
		<section class="col-8">	
			<div ng-repeat="patient in patients">
				<div ng-class="{current: $first }" class="patient wrapper">
					<div class="stamp stamp-approve">
						<i class="icon-thumbs-up"></i> Approved
					</div>
					<div class="stamp stamp-reassign">
						<i class="icon-user"></i> Reassigned to 
						<br /><span class="val">Jason Leu</span>
					</div>

					<div class="panel bot-10 open">
						<div class="panel-heading">
							<h2 class="panel-title">
								<i class="icon-pencil edit pull-right"></i>
								<i class="icon-{{patient.gender}}"></i> {{patient.first}} {{patient.last}}
							</h2>
						</div>
						<div class="list-group-flush pad pad-left row">
							<div class="col-6">
								DOB <strong>{{prettydate(patient.dob)}}</strong>
								<br />Address <strong>{{patient.address}}</strong>
							</div>
							<div class="col-6">
								Policy # <strong>{{patient.policy}}</strong>
								<br />Group # <strong>{{patient.group}}</strong>
							</div>
						</div>
					</div>

					<div class="panel bot-10 open">
						<div class="panel-heading">
							<h2 class="panel-title">
								<i class="icon-medkit"></i> Encounter #2507
							</h2>
						</div>

						<div class="list-group-flush pad claims">
							<div class="alert alert-warning">
								<strong>Code Check</strong> The Diagnosis Code(s) submitted with the Procedure Code (98941) does not meet or may not fully support Medical Necessity. 
							</div>

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
								    <td class="text-warning">98941</td>
								    <td>&nbsp;</td>
								    <td>V25.09</td>
								    <td>$257.00</td>
								  </tr>
								</tbody>
							</table>
						</div>

					</div> <!-- /.panel -->
				</div> <!-- /.patient.wrapper -->
			</div>
		</section>

		<aside class="col-4">
			<div class="panel bot-10 open">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="icon-pencil edit pull-right"></i>
						<i class="icon-building"></i> Aetna Health
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					<div class="alert alert-danger">
						<strong>Payer Address</strong> is missing
					</div>

					<span class="text-danger">Address</span>
					<br />EDI Payer # <strong>234234 (Capario)</strong>
					<br />Group # <strong>AD90543</strong>
				</div>
			</div>

			<div class="panel bot-10 open">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="icon-pencil edit pull-right"></i>
						<i class="icon-home"></i> Davenport Medical Clinic
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					<div class="alert alert-danger">
						<strong>Rendering location</strong> is missing
					</div>

					<span class="text-danger">Rendering Location</span>
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
					<div class="btn-group btn-group-lg btn-group-justified">
						<a href="#" id="approve" class="btn btn-inverse action"><i class="icon-thumbs-up"></i> Approve</a>
						<a href="#" id="reassign" class="btn btn-inverse action"><i class="icon-user"></i> Reassign</a>
					</div>				
				</div>
			</div>
		</div>
	
	</div>

</div>

<?php require_once('_footer.php'); ?>