<?php 
$title = 'Enrollment';
require('_header.php'); 
?>

	<header>
	&nbsp;
	</header>
	
	<div class="subhead">
		<div class="container clearfix">
			<div class="video">
				<img src="http://placehold.it/400x240">
			</div>

			<h1>What we do at Kareo Labs</h1>
			<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.</p>
			

		</div>
	</div>
	
	<div class="container">
		<h2>Tell us a little about yourself</h2>
		
		<form>
			<h3>I am a...</h3>
				<label><input type="radio" name="radio" />Biller</label><br />
				<label><input type="radio" name="radio" />Office Manager</label><br />
				<label><input type="radio" name="radio" />Provider</label><br />
				<label><input type="radio" name="radio" />Other <input type="text" name="other" id="other" placeholder="Please specify" /></label>
		</form>

        <div class="buttonrow">
        	<a class="button primary" href="experiment.php">Finish</a><a class="button" href="login.php">Cancel</a>
        </div>
    </div>

    
<?php require('_footer.php'); ?>