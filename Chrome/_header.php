<?php 
	$devmode = 1; // for production, set $devmode to '0'
/* 	$cssprefix = 'chrome'; */
	$cssprefix = 'rcm';
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
        <link rel="stylesheet/less" type="text/css" href="<?php echo $cssprefix; ?>.bootstrap.less" />
        <script type="text/javascript" src="../Assets/js/less-1.3.3.min.js"></script>
        
        <script type="text/javascript">
		    less.env = "development";
		    less.watch();
		</script>

        <?php } else { ?>
        <link rel="stylesheet" href="<?php echo $cssprefix; ?>.bootstrap.css" type="text/css" charset="utf-8">
        <?php } ?>
        
        <!-- Angular and Kareo data files -->
		<script src="../Assets/js/underscore-min.js"></script>
		<script src="../Assets/js/angular.min.js"></script>
		<script src="../Assets/js/bootstrap-gh-pages/ui-bootstrap-tpls-0.1.0.min.js"></script>
		
		<script src="../Assets/js/kareodata/coredata.js"></script>
<!-- 		<script src="../Assets/js/kareodata/lifecycle.js"></script> -->
		<script src="../Assets/js/kareodata/rcm.js"></script>

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        