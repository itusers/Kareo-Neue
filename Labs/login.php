<?php 
$title = 'Login';
require('_header.php'); 
?>

	    <div id="login" class="container-fluid">
	    	<div class="row-fluid">
	    		<div class="span4 offset4">
			        <img src="img/kareolabs-logo.jpg" />
			        <form>
			            <input type="text" id="username" name="username" placeholder="Login or email"/>
			            <input type="password" id="password" name="password" placeholder="Password"/>
			            <div class="buttonrow"><a class="btn btn-primary" href="template.php">Sign in</a></div>
			        </form>
			        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			    </div> <!-- /.span4 -->
		    </div>
	    </div> <!-- /.container -->

<?php require('_footer.php'); ?>