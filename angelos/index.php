<!DOCTYPE html>

<?php

session_start();

?>

<html lang="en">

<head>
	<title>Angelos</title>
	<link rel="icon" href="images/Angelos.png">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="css/login.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>

	<section class="login">
		<img src="images/wave.png" alt="wave" class="wave">

		<div class="login-hero">
			<img src="images/shoppy.svg" alt="shopping">
		</div>

		<div class="login-container">

			<form action="home.php" method="post">

				<img src="images/login_profile.svg" alt="profile">
				<h1>Login</h1>

				<div class="input-div">
					<div class="i">
						<i class="fas fa-user"></i>
					</div>
					<div>
						<input type="text" name="logUser" class="input" id="logUser" placeholder="Username" autofocus>
					</div>
				</div>

				<div class="input-div">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div>
						<input type="password" name="logPass" class="input" id="logPass" placeholder="Password">
					</div>
				</div>
				<a href="register.php" class="signUp">Don't have an account?</a>
				<input type="submit" class="logBtn" value="login" name="login" id="logBtn">

				<p id="warning"></p>


			</form>

			<?php

			if (isset($_POST["login"])) {

				$user = $_POST["logUser"];
				$pass = $_POST["logPass"];

				$_SESSION["logUser"] = $user;
				$_SESSION["logPass"] = $pass;

				$servername = "localhost";
				$username = "root";
				$password = "";
				$database = "angelos_db";

				$conn = new mysqli($servername, $username, $password, $database);

				if ($conn->connect_error) {
					echo '
					<script>

					document.getElementById("warning").innerHTML = "Connection Failed: Failed to Connect! ";

					</script>';
				}

				$sql = "SELECT * FROM account_tbl WHERE user='$user' AND pass='$pass'";
				$result = $conn->query($sql);


				if (!empty($_POST['logUser']) || !empty($_POST['logPass'])) {
					if ($result->fetch_assoc()) {
						header("location: index.php");
					} else {
						echo '
						<script>

						document.getElementById("warning").innerHTML = "The username or password is incorrect!";

						</script>';
					}
				} else {
					echo '
						<script>

						document.getElementById("warning").innerHTML = "Please enter your account!";

						</script>';
				}




				//end
			}

			?>

		</div>

	</section>
</body>

</html>