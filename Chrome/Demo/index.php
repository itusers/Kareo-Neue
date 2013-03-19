<?php 
	$title = 'Demo';
	$devmode = 1; // for production, set $devmode to '0'
?>

<!DOCTYPE html>
<html lang="en" ng-app="app">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Chrome: <?php echo $title; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        
        <?php if ($devmode) { ?>
        <link rel="stylesheet/less" type="text/css" href="../rcm.bootstrap.less" />
        <script type="text/javascript" src="../../Assets/js/less-1.3.3.min.js"></script>
        
        <script type="text/javascript">
		    less.env = "development";
		    less.watch();
		</script>

        <?php } else { ?>
        <link rel="stylesheet" href="../rcm.bootstrap.css" type="text/css" charset="utf-8">
        <?php } ?>
        
        <!-- Angular and Kareo data files -->
		<script src="../../Assets/js/underscore-min.js"></script>
		<script src="../../Assets/js/angular.min.js"></script>
		<script src="../../Assets/js/bootstrap-gh-pages/ui-bootstrap-tpls-0.1.0.min.js"></script>
		
		<script src="../../Assets/js/kareodata/coredata.js"></script>
		<script src="../../Assets/js/kareodata/rcm.js"></script>

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        
		
			<!-- .navbar -->
			<div class="navbar navbar-fixed-top">
			  <div class="navbar-inner">
				  <div class="container">
					  <div class="dropdown">
						  <a class="brand dropdown-toggle" href="#">Kareo<span class="entypo">&#59232;</span></a>
						  <ul class="dropdown-menu">
							  <li><a ng-click="filterCriteria.pid=''">Providers</a></li>
							  <li><a ng-click="filterCriteria.pid=''">Front-Office Manager</a></li>
							  <li><a ng-click="filterCriteria.pid=''">Billers</a></li>
						  </ul>
					  </div>
					  <ul class="nav">
					      <li ng-class="active_dashboard"><a href="#">Dashboard</a></li>
					      <li ng-class="active_patients"><a href="#">Patients</a></li>
					      <li ng-class="active_encounters"><a href="rcm_encounters.php">Encounters</a></li>
					      <li ng-class="active_tasks"><a href="rcm_tasks.php">Tasks</a></li>
					      <li ng-class="active_documents"><a href="#">Documents</a></li>
					  </ul>
					  <ul class="nav pull-right">
						  <li><a href="#">Devesh Khare <span class="entypo">&#59232;</span></a></li>
					  </ul>		  	
				  </div>
			  </div>
			</div> <!-- /.navbar -->
			
			<div class="full container">

				<div ng-view></div>
	
			</div> <!-- /.container -->

<!--         <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>
        <script src="../Assets/bootstrap/js/bootstrap-transition.js"></script>
        <script src="../Assets/bootstrap/js/bootstrap-modal.js"></script>
         -->

        <!-- Typekit -->
        <script type="text/javascript" src="//use.typekit.net/usb3bya.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    </body>
</html>
