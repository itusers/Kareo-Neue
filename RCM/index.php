<?php require_once('_header.php'); ?>

<!-- Working through Claim Denials -->

<div class="container" ng-controller="DenialsListController">

	<div class="row">
		<aside class="col-3">
			<div class="descriptor pad">Group by</div>
			
			<ul class="nav nav-pills nav-stacked">
				<li class="active"><a href="#">Remark codes <i class="icon-arrow-right"></i> Insurance</a></li>
				<li><a href="#">Insurance <i class="icon-arrow-right"></i> Remark codes</a></li>
			</ul>

			<hr />

			<div class="descriptor pad">Show claims from</div>

			<ul class="nav nav-pills nav-stacked">
				<li class="active"><a href="#">All your practices</a></li>
				<li ng-repeat="practice in practices"><a href="#">{{ practice.name }}</a></li>
			</ul>

		</aside>
		
		<section class="col-9">
			
			<div class="panel">
				<!-- Default panel contents -->
				<div class="panel-heading">
					<div class="list-info list-amount">$5000</div>
					<div class="list-info list-encounters">120</div>
					<strong>CO-140</strong> Patient/Insured health identification number and name do not match.
				</div>
				<!-- List group -->
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Cras justo odio</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
			<div class="panel">
				<!-- Default panel contents -->
				<div class="panel-heading"><strong>CO-140</strong> Patient/Insured health identification number and name do not match.</div>
				<!-- List group -->
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Cras justo odio</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
			<div class="panel">
				<!-- Default panel contents -->
				<div class="panel-heading"><strong>CO-140</strong> Patient/Insured health identification number and name do not match.</div>
				<!-- List group -->
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Cras justo odio</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>

			<!-- <div class="card hide-overflow">

				<!-- remark code 
				<div class="remark">
					<div class="row">
						<div class="col-8">
							<div class="pad leftpad">
								<i class="icon-caret-right"></i> 
								<p><strong>CO-140</strong> Patient/Insured health identification number and name do not match.</p>

							</div>
						</div>
						<div class="col-2">
							<div class="pad">120</div>
						</div>
						<div class="col-2">
							<div class="pad">$5000.00</div>
						</div>
					</div>
					<div class="insurances">
						<div class="row insurance">
							<div class="col-8">
								<div class="pad leftpad">
									Aetna Health
								</div>
							</div>
							<div class="col-2">
								<div class="pad">30</div>
							</div>
							<div class="col-2">
								<div class="pad">$500.00</div>
							</div>
						</div>
						<div class="row insurance">
							<div class="col-8">
								<div class="pad leftpad">
									Medicare
								</div>
							</div>
							<div class="col-2">
								<div class="pad">20</div>
							</div>
							<div class="col-2">
								<div class="pad">$300.00</div>
							</div>
						</div>
					</div>
				</div>

				<!-- remark code 
				<div class="remark">
					<div class="row">
						<div class="col-8">
							<div class="pad leftpad">
								<i class="icon-caret-right"></i> 
								<p><strong>MA-130</strong> Our claim contains incomplete and/or invalid information, and no appeal rights are afforded because the claim is unprocessable.</p>
							</div>
						</div>
						<div class="col-2">
							<div class="pad">90</div>
						</div>
						<div class="col-2">
							<div class="pad">$3500.00</div>
						</div>
					</div>
					<div class="insurances">
						<div class="row insurance">
							<div class="col-8">
								<div class="pad leftpad">
									Medicare
								</div>
							</div>
							<div class="col-2">
								<div class="pad">40</div>
							</div>
							<div class="col-2">
								<div class="pad">$600.00</div>
							</div>
						</div>
						<div class="row insurance">
							<div class="col-8">
								<div class="pad leftpad">
									Aetna Health
								</div>
							</div>
							<div class="col-2">
								<div class="pad">20</div>
							</div>
							<div class="col-2">
								<div class="pad">$400.00</div>
							</div>
						</div>
						<div class="row insurance">
							<div class="col-8">
								<div class="pad leftpad">
									American Family Insurance
								</div>
							</div>
							<div class="col-2">
								<div class="pad">10</div>
							</div>
							<div class="col-2">
								<div class="pad">$250.00</div>
							</div>
						</div>
					</div>
				</div>

				<!-- remark code 
				<div class="remark">
					<div class="row">
						<div class="col-8">
							<div class="pad leftpad">
								<i class="icon-caret-right"></i>
								<p><strong>MA-61</strong> Missing/incomplete/invalid social security number or health insurance claim number.</p>
							</div>
						</div>
						<div class="col-2">
							<div class="pad">70</div>
						</div>
						<div class="col-2">
							<div class="pad">$2700.00</div>
						</div>
					</div>
				</div>

			</div> -->

		</section>
	</div>

</div>

<?php require_once('_footer.php'); ?>