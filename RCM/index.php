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
			<div class="card">
				<div class="container">
					<div class="row" ng-repeat="remark in remarks">
						<div class="col-8">
							<div class="pad">
								<i class="icon-caret-right"></i> <strong>{{ remark.code }}</strong> {{ remark.desc }}
							</div>
						</div>
						<div class="col-2">
							<div class="pad">90</div>
						</div>
						<div class="col-2">
							<div class="pad">$5000.00</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>

</div>

<?php require_once('_footer.php'); ?>