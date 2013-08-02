<?php require_once('_header.php'); ?>

<!-- Working through Claim Denials -->

<div class="container" ng-controller="DenialsListController">

	<div class="row">
		<aside class="col-3">
			<div class="form-group">
				<label for="exampleInputEmail">Group by</label>
				<select class="form-control">
					<option>Remark codes</option>
				</select>
		    </div>
		    <div class="form-group">
				<label for="exampleInputEmail">Sub-group by</label>
				<select class="form-control">
					<option>Insurance</option>
				</select>
		    </div>
		    <div class="form-group">
				<label for="exampleInputEmail">Show claims from</label>
				<select class="form-control">
					<option>All practices</option>
				</select>
		    </div>
		</aside>
		
		<section class="col-9">
			<div class="card hide-overflow">

				<!-- remark code -->
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

				<!-- remark code -->
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

				<!-- remark code -->
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

			</div>
		</section>
	</div>

</div>

<?php require_once('_footer.php'); ?>