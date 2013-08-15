<?php 
	$in_dev_mode = 1;      // for production, set $in_dev_mode to '0'
    $cssprefix = 'main';

    // Kirby Toolkit. http://toolkit.getkirby.com/
    // Commented out by default. But it's there for you if you need it:
    // require_once('assets/php/kirby.php'); 
?>

<!DOCTYPE html>
<html lang="en" ng-app="app">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>RCM 2.0 - <?= $title ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <!-- Using Open Sans: http://www.google.com/fonts#UsePlace:use/Collection:Open+Sans -->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

        <script type="text/javascript" src="assets/js/jquery-2.0.3.min.js"></script>
        <script type="text/javascript" src="assets/js/moment.min.js"></script>
<!--        <script type="text/javascript" src="assets/bootstrap-3.0.0-wip/js/transition.js"></script>-->
        <script type="text/javascript" src="assets/bootstrap-3.0.0-wip/js/tooltip.js"></script>
        <script type="text/javascript" src="assets/bootstrap-3.0.0-wip/js/modal.js"></script>
        <script type="text/javascript" src="assets/bootstrap-3.0.0-wip/js/dropdown.js"></script>
<!--        <script type="text/javascript" src="assets/bootstrap-3.0.0-wip/js/affix.js"></script>-->
        <script type="text/javascript" src="assets/js/underscore-min.js"></script>
        <script type="text/javascript" src="assets/js/angular.min.js"></script>
        <script type="text/javascript" src="assets/js/rcm.js"></script>
        
        <?php if ($in_dev_mode) { ?>
        <link rel="stylesheet/less" type="text/css" href="assets/styles/<?php echo $cssprefix; ?>.bootstrap-3.less" />

        <script type="text/javascript" src="assets/js/less-1.4.1.min.js"></script>
        
        <script type="text/javascript">
		    less.env = "development";
		    less.watch();
		</script>

        <?php } else { ?>
        <link rel="stylesheet" href="assets/styles/<?php echo $cssprefix; ?>.bootstrap-3.css" type="text/css" charset="utf-8">
        <?php } ?>


    </head>
    <body id="<?= $id ?>">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Header -->
        <div class="navbar navbar-static-top">
            <div class="container">
                <div class="row">
                    <h1 id="logo" class="col-12">
                        &nbsp;
                    </h1>                    
                </div>
            </div>
            
            <div class="subnav">
                <div class="container">
                    <div class="row">
                        <ul class="nav nav-pills col-3">
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i id="dropdown-arrow" class="icon-angle-right"></i>
                                <? if($id=='denials') { ?><i class="icon-list-alt"></i> Claims
                                <? } elseif($id=='encounters') { ?><i class="icon-medkit"></i> Encounters<? } ?>
                                </a>
                                <!-- Sidebar -->
                                <ul class="dropdown-menu">
                                    <li<? if($id=='launchpad') echo ' class="active"'; ?>><a href="index.php"><i class="icon-rocket"></i> Launchpad</a></li>
                                    <li<? if($id=='encounters') echo ' class="active"'; ?>><a href="encounters.php"><i class="icon-medkit"></i> Encounters</a></li>
                                    <li<? if($id=='denials') echo ' class="active"'; ?>><a href="denials.php"><i class="icon-list-alt"></i> Claims</a></li>
                                    <li><a href="#"><i class="icon-money"></i> Payments</a></li>
                                </ul>
                            </li>
                        </ul>

                        <? if ($id == 'denials') { ?>
                        
                        <ul class="nav nav-pills col-8">
                            <li><a href="#">Rejections</a></li>
                            <li class="active"><a href="denials.php">Denials <span id="currentcount" class="badge">342</span></a></li>
                            <li><a href="#">No Responses</a></li>
                            <li><a href="#">Later</a></li>
                        </ul>
                        
                        <? } elseif ($id == 'encounters') { ?>

                        <ul class="nav nav-pills col-7 col-offset-1">
                            <li class="active"><a href="encounters.php">Draft <span id="currentcount" class="badge">109</span></a></li>
                            <li><a href="#">Approved</span></a></li>
                        </ul>

                        <? } ?>

                        <ul class="nav nav-pills col-1">
                            <li class="pull-right"><a href="#" class="dropdown-toggle"><i class="icon-inbox"></i></a></li>
                        </ul>
                    </div>  <!-- /.row -->
                </div>
            </div>  <!-- /.subnav -->
        </div>  <!-- /.navbar -->
        