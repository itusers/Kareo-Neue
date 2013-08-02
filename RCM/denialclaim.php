<?php require_once('_header.php'); ?>	

<div class="container">
	<div class="row nocard">
		<div class="pull-right descriptor">18/120</div>
		<div class="descriptor">Overall progress</div>
		<div class="progress">
			<div class="progress-bar progress-bar-success" style="width: 15%"></div>
		</div>

	</div>

	<div class="row">
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
					<i class="icon-home"></i>
					<p>
						<h4>Davenport Medical Clinic</h4>
						Group NPI <strong>199457851</strong>
						<br />EIN <strong>45-584562</strong>
					</p>
				</div>
				<div class="meta-info">
					<i class="icon-user-md"></i>
					<p>
						<h4>Randy Sinnott, DO</h4>
						NPI <strong>123456789</strong>
					</p>
				</div>
				
			</div>
		</aside>

		<section class="col-8">	
			<div class="current patient card">
				<div class="stamp stamp-appeal">
					<i class="icon-bolt"></i> Appealed
				</div>
				<div class="stamp stamp-snooze">
					<i class="icon-time"></i> Snoozed for 
					<br /><span class="days">5</span> days
				</div>
				<div class="stamp stamp-settle">
					<i class="icon-legal"></i> Settled
				</div>
				<div class="stamp stamp-reassign">
					<i class="icon-user"></i> Reassigned to 
					<br /><span class="user">Jason Leu</span>
				</div>
				<div class="stamp stamp-resubmit">
					<i class="icon-refresh"></i> Resubmitted
				</div>

				<div class="header pad row">
					<h2 class="col-6"><i class="icon-female"></i> Buffy Summers <i class="icon-pencil edit"></i></h2> 
					<div class="col-3 smalltext">
						DOB <strong>5/15/1949</strong>
						<br />SSN <strong>552-97-5555</strong>
					</div>
					<div class="col-3 smalltext">
						Policy # <strong>HLFAN156832</strong>
						<br />Group # <strong>002230001</strong>
					</div>
				</div> <!-- /.row -->

				<div class="pad">
					<div class="alert alert-warning">
						<strong>15 days left</strong> until estimated filing deadline 
					</div>
					<div class="lifecycle">
						<!-- DOS -->
						<i class="icon-circle text-muted" style="left: 0%;" data-toggle="tooltip" title="<strong>Date of Service</strong> 7/3/2013"></i>
						<!-- Estimated filing deadline -->
						<i class="icon-frown text-danger" style="left: 98%;" data-toggle="tooltip" title="<strong>Filing Deadline</strong> 11/3/2013"></i>
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
							<div class="progress-bar progress-bar-warning" style="width: 33%"></div>
						</div>
					</div> <!-- /.lifecycle -->
				</div>

				<div class="pad">
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
						    <td>7/3/2013</td>
						    <td>99214</td>
						    <td>$136.00</td>
						  </tr>
						  <tr>
						    <td><i class="icon-ban-circle text-danger"></i></td>
						    <td>7/3/2013</td>
						    <td>36415</td>
						    <td>$257.00</td>
						  </tr>
						  <tr>
						    <td><i class="icon-ban-circle text-danger"></i></td>
						    <td>7/3/2013</td>
						    <td>83036</td>
						    <td>$312.00</td>
						  </tr>
						</tbody>
					</table>
				</div>

				<div class="pad history">
					<h3>Activity History</h3>
					<div class="row">
						<div class="col-2 date">7/3/2013</div>
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
					<div class="row">
						<div class="col-2 date">Today</div>
						<div class="col-1 timeline"><i class="icon-comment"></i></div>
						<div class="col-9">
							<textarea class="form-control" rows="2"></textarea>
							<button type="button" class="btn btn-primary" disabled="disabled">Add comment</button>
						</div>
					</div>
				</div>
			</div> <!-- /.patient.card -->

			<div class="patient card">
				<div class="stamp stamp-appeal">
					<i class="icon-bolt"></i> Appealed
				</div>
				<div class="stamp stamp-snooze">
					<i class="icon-time"></i> Snoozed for 
					<br /><span class="days">5</span> days
				</div>
				<div class="stamp stamp-settle">
					<i class="icon-legal"></i> Settled
				</div>
				<div class="stamp stamp-reassign">
					<i class="icon-user"></i> Reassigned to 
					<br /><span class="user">Jason Leu</span>
				</div>
				<div class="stamp stamp-resubmit">
					<i class="icon-refresh"></i> Resubmitted
				</div>

				<div class="header pad row">
					<h2 class="col-6"><i class="icon-male"></i> Xander Harris <i class="icon-pencil edit"></i></h2> 
					<div class="col-3 smalltext">
						DOB <strong>5/15/1949</strong>
						<br />SSN <strong>552-97-5555</strong>
					</div>
					<div class="col-3 smalltext">
						Policy # <strong>HLFAN156832</strong>
						<br />Group # <strong>002230001</strong>
					</div>
				</div> <!-- /.row -->

				<div class="pad">
					<div class="alert alert-warning">
						<strong>15 days left</strong> until estimated filing deadline 
					</div>
					<div class="lifecycle">
						<!-- DOS -->
						<i class="icon-circle text-muted" style="left: 0%;" data-toggle="tooltip" title="<strong>Date of Service</strong> 7/3/2013"></i>
						<!-- Estimated filing deadline -->
						<i class="icon-frown text-danger" style="left: 98%;" data-toggle="tooltip" title="<strong>Filing Deadline</strong> 11/3/2013"></i>
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
							<div class="progress-bar progress-bar-warning" style="width: 33%"></div>
						</div>
					</div> <!-- /.lifecycle -->
				</div>

				<div class="pad">
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
						    <td>7/3/2013</td>
						    <td>99214</td>
						    <td>$136.00</td>
						  </tr>
						  <tr>
						    <td><i class="icon-ban-circle text-danger"></i></td>
						    <td>7/3/2013</td>
						    <td>36415</td>
						    <td>$257.00</td>
						  </tr>
						  <tr>
						    <td><i class="icon-ban-circle text-danger"></i></td>
						    <td>7/3/2013</td>
						    <td>83036</td>
						    <td>$312.00</td>
						  </tr>
						</tbody>
					</table>
				</div>

				<div class="pad history">
					<h3>Activity History</h3>
					<div class="row">
						<div class="col-2 date">7/3/2013</div>
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
					<div class="row">
						<div class="col-2 date">Today</div>
						<div class="col-1 timeline"><i class="icon-comment"></i></div>
						<div class="col-9">
							<textarea class="form-control" rows="2"></textarea>
							<button type="button" class="btn btn-primary" disabled="disabled">Add comment</button>
						</div>
					</div>
				</div>
			</div> <!-- /.patient.card -->

			<div class="patient card">
				<div class="stamp stamp-appeal">
					<i class="icon-bolt"></i> Appealed
				</div>
				<div class="stamp stamp-snooze">
					<i class="icon-time"></i> Snoozed for 
					<br /><span class="days">5</span> days
				</div>
				<div class="stamp stamp-settle">
					<i class="icon-legal"></i> Settled
				</div>
				<div class="stamp stamp-reassign">
					<i class="icon-user"></i> Reassigned to 
					<br /><span class="user">Jason Leu</span>
				</div>
				<div class="stamp stamp-resubmit">
					<i class="icon-refresh"></i> Resubmitted
				</div>

				<div class="header pad row">
					<h2 class="col-6"><i class="icon-female"></i> Willow Rosenberg <i class="icon-pencil edit"></i></h2> 
					<div class="col-3 smalltext">
						DOB <strong>5/15/1949</strong>
						<br />SSN <strong>552-97-5555</strong>
					</div>
					<div class="col-3 smalltext">
						Policy # <strong>HLFAN156832</strong>
						<br />Group # <strong>002230001</strong>
					</div>
				</div> <!-- /.row -->

				<div class="pad">
					<div class="alert alert-warning">
						<strong>15 days left</strong> until estimated filing deadline 
					</div>
					<div class="lifecycle">
						<!-- DOS -->
						<i class="icon-circle text-muted" style="left: 0%;" data-toggle="tooltip" title="<strong>Date of Service</strong> 7/3/2013"></i>
						<!-- Estimated filing deadline -->
						<i class="icon-frown text-danger" style="left: 98%;" data-toggle="tooltip" title="<strong>Filing Deadline</strong> 11/3/2013"></i>
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
							<div class="progress-bar progress-bar-warning" style="width: 33%"></div>
						</div>
					</div> <!-- /.lifecycle -->
				</div>

				<div class="pad">
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
						    <td>7/3/2013</td>
						    <td>99214</td>
						    <td>$136.00</td>
						  </tr>
						  <tr>
						    <td><i class="icon-ban-circle text-danger"></i></td>
						    <td>7/3/2013</td>
						    <td>36415</td>
						    <td>$257.00</td>
						  </tr>
						  <tr>
						    <td><i class="icon-ban-circle text-danger"></i></td>
						    <td>7/3/2013</td>
						    <td>83036</td>
						    <td>$312.00</td>
						  </tr>
						</tbody>
					</table>
				</div>

				<div class="pad history">
					<h3>Activity History</h3>
					<div class="row">
						<div class="col-2 date">7/3/2013</div>
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
					<div class="row">
						<div class="col-2 date">Today</div>
						<div class="col-1 timeline"><i class="icon-comment"></i></div>
						<div class="col-9">
							<textarea class="form-control" rows="2"></textarea>
							<button type="button" class="btn btn-primary" disabled="disabled">Add comment</button>
						</div>
					</div>
				</div>
			</div> <!-- /.patient.card -->
		</section>
	</div>

	<div class="navbar navbar-fixed-bottom">
		<div class="container">
			<div class="row">
				<div class="col-8 col-offset-4">
					<div class="btn-group btn-group-justified">
						<a href="#" id="appeal" class="btn btn-large btn-default"><i class="icon-bolt"></i> Appeal</a>
						<a href="#" id="snooze" class="btn btn-large btn-default"><i class="icon-time"></i> Snooze</a>
						<a href="#" id="settle" class="btn btn-large btn-default"><i class="icon-legal"></i> Settle</a>
						<a href="#" id="reassign" class="btn btn-large btn-default"><i class="icon-user"></i> Reassign</a>
						<a href="#" id="resubmit" class="btn btn-large btn-default" disabled="disabled"><i class="icon-refresh"></i> Resubmit</a>
					</div>				
				</div>
			</div>
		</div>
	
	</div>

</div>
<?php require_once('_footer.php'); ?>