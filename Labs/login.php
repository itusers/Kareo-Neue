<?php 
$title = 'Login';
require('_header.php'); 
?>

	    <div class="container" id="login">
	        <img src="img/kareolabs-logo.jpg" />
	        <form>
	            <input type="text" id="username" name="username" placeholder="Login or email"/>
	            <input type="password" id="password" name="password" placeholder="Password"/>
	            <div class="buttonrow"><a class="primary button" href="template.php">Sign in</a></div>
	        </form>
	        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
	    </div>

<?php require('_footer.php'); ?>