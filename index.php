<!DOCTYPE html>
<html>
<head>

	<title>JRockVision | Saratoga Springs Photography</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<meta property="og:image" content="images/jrv/screen.png" />
	<meta property="og:title" content="JRockVision" />
	<meta property="og:description" content="Photography | Videography " />

	<link rel="shortcut icon" href="images/jrv/jrvb.png">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/style.css">
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Vollkorn' rel='stylesheet' type='text/css'>

</head>
<body>
	<?php include_once("analyticstracking.php") ?>
	<div class="loader">
		<div class="home_box_1">
			<div class="jumbotron">
				<!-- <h1>JRockVision</h1> -->
				<div class="home_logo">
					<img src="images/jrv/jrvb.gif" alt="" />
				</div>
				<!-- <h4>Please wait...<br>Your gonna wanna see this!</h4> -->
			</div>
		</div>
	</div>

	<div class="menu_box">
			<div class="row">
				<div class="col-lg-6 behind_menu">
					<div class="inner_menu_box ">
							<div>Behind the Lens</div>
					</div>
				</div>
				<div class="col-lg-6 photo_menu">
					<div class="inner_menu_box">
							<div>Photography</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 video_menu">
					<div class="inner_menu_box">
							<div>Videography</div>
					</div>
				</div>
				<div class="col-lg-6 contact_menu">
					<div class="inner_menu_box">
							<div>Contact</div>
					</div>
				</div>
		</div>
	</div>


	<div class="body_wrapper">
		<?php
			include('menu.php');
		?>


	<div class="back_img">
		<!-- <img src="images/grid.jpg" alt="" /> -->
	</div>

	<div class="background">
		<!-- slide 1 -->
		<div class="slide" id="slide1" data-slide='1' data-stellar-background-ratio='0'>
			<div class="home_box">
				<div class="jumbotron">
					<h1 style="color:#f2f2f2;">JRockVision</h1>
					<div class="home_logo">
						<img src="images/jrv/jrvw.png" alt="" />
					</div>
					<h2 style="color:#f2f2f2;opacity:0.7;">Photography | Videography</h2>
					<div class="explore_wrap">
						<div class="explore">
							Behind the Lens
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="behind_the">
			<div class="jumbotron">
				<h1>Behind the Lens</h1>
			</div>
		</div>
		<!-- slide 2 -->
		<div class="slide edge--bottom" id="slide2" data-slide='2' data-stellar-background-ratio='0.1'>
					<?php
							include('jamie.php');
					?>
		</div>
		<!-- slide 2_5 -->
		<div class="slide edge--top--reverse" id="slide2_5" data-slide='2_5' data-stellar-background-ratio='0.1'>
					<?php
							include('laura.php');
					?>
		</div>



		<!-- slide 4 -->
		<div class="slide edge--bottom" id="slide4" data-slide='4' data-stellar-background-ratio='0.1'>
			<?php
				include('photography.php');
			?>
		</div>


		<!-- slide 5.5 -->
		<div class="slide edge--top--reverse" id="slide5_5" data-slide='5_5' data-stellar-background-ratio='0.1'>
			<?php
				include('videography.php');
			?>
		</div>


		<!-- slide 6 -->
		<div class="slide" id="slide6" data-slide='6' data-stellar-background-ratio='0.1'>
					<?php
						include('contact.php');
					?>
		</div>
		<!-- 	</div> -->




	</div>

	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/jquery.stellar.min.js"></script>
	<script type="text/javascript" src="js/jquery.waypoints.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>

</html>
