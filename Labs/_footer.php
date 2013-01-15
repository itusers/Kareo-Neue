
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>
        <script src="../Assets/bootstrap/js/bootstrap-transition.js"></script>
        <script src="../Assets/bootstrap/js/bootstrap-modal.js"></script>
        
        <script>
    		// set #iframe's height dynamically
    		function resizeIframe() {
	        	$('#iframe').height($(window).height() - $('#experiment').height() - 5);
    		}

        	if ($('#iframe')) {
	        	$(window).load(function() {
		        	resizeIframe();
	        	});
        		
        		$(window).resize(function() {
	        		resizeIframe();
				});
        	}
        </script>

    </body>
</html>
