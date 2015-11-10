<!DOCTYPE html>
<html>
<head>

	<title>JRockVision | Saratoga Springs Photography</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">

	<link rel="shortcut icon" href="images/jrv/jrvb.png">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/style.css">
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Vollkorn' rel='stylesheet' type='text/css'>

</head>
<body>
	<div class="loader">

	</div>

	<div class="menu_box">
			<div class="row">
				<div class="col-xs-6">
					<div class="inner_menu_box ">
						<div class="jumbotron">
							<h1>Behind the Lens</h1>
						</div>
					</div>
				</div>
				<div class="col-xs-6">
					<div class="inner_menu_box">
						<div class="jumbotron">
							<h1>Photography</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-6">
					<div class="inner_menu_box">
						<div class="jumbotron">
							<h1>Videography</h1>
						</div>
					</div>

				</div>
				<div class="col-xs-6">
					<div class="inner_menu_box">
						<div class="jumbotron">
							<h1>Contact</h1>
						</div>
					</div>
				</div>
		</div>

	</div>

	<div class="body_wrapper">


		<?php
			include('menu.php');
		?>
	<!-- <nav id="theNav" class="navbar navbar-fixed-left navigation">
		<ul>
			<li data-slide='1'><a href="#" id="btnOne" class=" btn btn-default btns">Home<br><span class="glyphicon glyphicon-home" aria-hidden="true"></a></li>
			<li data-slide='2'><a href="#" id="btnTwo" class="btn btn-default btns">About<br><span class="glyphicon glyphicon-user" aria-hidden="true"></a></li>

			<li data-slide='3'><a href="#" id="btnThree" class="btn btn-default btns">Portfolio<br><span class="glyphicon glyphicon-camera" aria-hidden="true"></a></li>

			<li data-slide='4'><a href="#" id="btnFour" class="btn btn-default btns">Contact<br><span class="glyphicon glyphicon-envelope" aria-hidden="true"></a></li>
			<li id="themeNavBar"></li>
		</ul>

	</nav> -->

	<div class="background">
		<!-- slide 1 -->
		<div class="slide" id="slide1" data-slide='1' data-stellar-background-ratio='0'>

			<div class="home_box">
				<div class="jumbotron">
					<h1>JRockVision</h1>
					<div class="home_logo">
						<img src="images/jrv/jrvb.png" alt="" />
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

		<!-- slide 3 -->
		<div class="slide" id="slide3" data-slide='3' data-stellar-background-ratio='0.1'>
			<div class="container">
				<div class="row">

				</div>
			</div>


		</div>




		<!-- slide 4 -->
		<div class="slide edge--bottom" id="slide4" data-slide='4' data-stellar-background-ratio='0.1'>

			<?php
				include('photography.php');
			?>



		</div>

		<!-- slide 5 -->
		<div class="slide" id="slide5" data-slide='5' data-stellar-background-ratio='0.1'>
			<div class="container">
				<div class="row">

				</div>
			</div>


		</div>

		<!-- slide 5.5 -->
		<div class="slide edge--top--reverse" id="slide5_5" data-slide='5_5' data-stellar-background-ratio='0.1'>
			<?php
				include('videography.php');
			?>


		</div>

		<!-- slide 6.5 -->
		<div class="slide" id="slide6_5" data-slide='6_5' data-stellar-background-ratio='0.1'>
			<div class="container">
				<div class="row">

				</div>
			</div>


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
