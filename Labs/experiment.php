<?php 
$title = 'A/R Reports';
require('_header.php'); 
?>

<div id="experiment">
	<header class="clearfix">
		<div class="container-fluid">
			<div class="row-fluid">

				<div class="accountpractice span4 offset5">
					<div class="heading">Account</div>
					<div class="name">American Medical Association</div>
				</div>
				
				<div class="accountpractice span3">
					<div class="heading">Practice</div>
					<div class="name">Dr. Jane's Office</div>
				</div>
				
			</div>
		</div> <!-- /.container-fluid -->

	</header>
	
	<div class="subhead">
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span6">
					<h1><?php echo $title; ?></h1> <a class="whatisthis" href="#modal" role="button" data-toggle="modal"><span class="entypo">&#59140;</span> What is this about?</a>
				</div>
				

					<div class="blurb span4">
						<strong>What do you think of this design?</strong>
						<br />You can explain why in the next screen
					</div>
					<div class="buttons span2">
						<a class="btn btn-success entypo" href="#">&#128077;</a>
						<a class="btn btn-danger entypo" href="#">&#128078;</a>
					</div>


			</div>
		</div> <!-- /.container-fluid -->
	</div> <!-- /.subhead -->
	
	<div class="alertband">
		You are using <strong>REAL</strong> data
	</div> <!-- /.alertband -->
	
</div> <!-- /#experiment -->

<iframe id="iframe" src="http://cnn.com"></iframe>

<div id="modal" class="modal hide fade">
	<div class="modal-header">
		<button type="button" class="close entypo" data-dismiss="modal" aria-hidden="true">&#10060;</button>
		<h1><?php echo $title; ?></h1>
	</div>
	<div class="modal-body">
		<div class="video"><img src="http://placehold.it/480x320"></div>
		<p>Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. </p>
	</div>
	<div class="modal-footer">
		<div class="alertband">Just a reminder, you are using <strong>REAL</strong> data!</div>
		<a href="#" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Close</a>
	</div>
</div>
    
<?php require('_footer.php'); ?>