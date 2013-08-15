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
				<div ng-class="{current: $first }" class="patient wrapper">
					<div class="stamp stamp-approve">
						<i class="icon-thumbs-up"></i> Approved
					</div>
					<div class="stamp stamp-reassign">
						<i class="icon-user"></i> Reassigned to 
						<br /><span class="val">Jason Leu</span>
					</div>

					<div class="panel bot-10">
						<div class="panel-heading">
							<h2 class="panel-title">
								<i class="icon-pencil edit pull-right"></i>
								<i class="icon-{{patient.gender}}"></i> {{patient.first}} {{patient.last}}
							</h2>
						</div>
						<div class="list-group-flush pad pad-left row">
							<div class="col-6">
								<dl class="dl-horizontal">
									<dt>DOB</dt>
									<dd>{{prettydate(patient.dob)}}</dd>
									<dt>Address</dt>
									<dd>{{patient.address}}</dd>
								</dl>
							</div>
							<div class="col-6">
								<dl class="dl-horizontal">
									<dt>Policy #</dt>
									<dd>{{patient.policy}}</dd>
									<dt>Group #</dt>
									<dd>{{patient.group}}</dd>
								</dl>
							</div>
						</div>
					</div>

					<div class="panel bot-10 open">
						<div class="panel-heading">
							<h2 class="panel-title">
								<div class="pull-right">
									<i class="icon-pencil edit"></i>
									<span class="badge badge-warning">1</span>
								</div>
								<i class="icon-medkit"></i> Encounter #2507
							</h2>
						</div>

						<div class="list-group-flush pad claims">

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
			<div class="panel panel-kareo bot-10 open">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="icon-bullseye"></i> HUD
					</h3>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item text-danger"><strong>Payer Address</strong> is missing</li>
					<li class="list-group-item text-danger"><strong>Rendering location</strong> is missing</li>
					<li class="list-group-item text-warning"><strong>Code Check</strong> The Diagnosis Code(s) submitted with the Procedure Code (98941) does not meet or may not fully support Medical Necessity.</li>
				</ul>
			</div>

			<div class="panel bot-10">
				<div class="panel-heading">
					<h3 class="panel-title">
						<div class="pull-right">
							<i class="icon-pencil edit"></i>
							<span class="badge badge-error">1</span>
						</div>
						<i class="icon-building"></i> Aetna Health
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					<dl class="dl-horizontal">
						<dt class="text-danger">Address</dt>
						<dd class="text-danger"><em>(missing)</em></dd>
						<dt>EDI Payer #</dt>
						<dd>234234 (Capario)</dd>
						<dt>Group #</dt>
						<dd>AD90543</dd>
					</dl>
				</div>
			</div>

			<div class="panel bot-10">
				<div class="panel-heading">
					<h3 class="panel-title">
						<div class="pull-right">
							<i class="icon-pencil edit"></i>
							<span class="badge badge-error">1</span>
						</div>
						<i class="icon-home"></i> Davenport Medical Clinic
					</h3>
				</div>
				<div class="list-group-flush pad pad-left">
					<dl class="dl-horizontal">
						<dt class="text-danger">Location</dt>
						<dd class="text-danger"><em>(missing)</em></dd>
						<dt>Group NPI </dt>
						<dd>199457851</dd>
						<dt>EIN</dt>
						<dd>45-584562</dd>
					</dl>
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
					<dl class="dl-horizontal">
						<dt>NPI</dt>
						<dd>123456789</dd>
					</dl>
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