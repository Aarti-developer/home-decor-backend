<?php
date_default_timezone_set('Asia/Kolkata');
$date = date('Y-m-d H:i:s');
$id = date('U');
$servername = "localhost";
$username = "ftvhomed_master";
$password = "password";

$dbname = "ftvhomed_website";


$con = new mysqli("localhost", $username , $password, $dbname);



if (mysqli_connect_errno()) {
    echo "Connection Error: " . mysqli_connect_errno();
} 
else {
    //echo "Connected";
    if(isset($_POST["enquiry_submit"])){
        $name =  mysqli_real_escape_string($con,$_POST["name"]);
        $email =  mysqli_real_escape_string($con,$_POST["email"]);
        $mobile =  mysqli_real_escape_string($con,$_POST["mobile"]);
        $state =  mysqli_real_escape_string($con,$_POST["state"]);
        $city =  mysqli_real_escape_string($con,$_POST["city"]);
        $investment_capacity =  mysqli_real_escape_string($con,$_POST["investment_capacity"]);
        $message =  mysqli_real_escape_string($con,$_POST["message"]);
        $url = $_POST['url'];
        $query = "INSERT INTO `enquiries` (`id`, `name`, `email`, `contact`, `state`, `city`, `investment_capacity`, `message`, `created_on`) VALUES ('".$id."','".$name."','".$email."','".$mobile."','".$state."','".$city."','".$investment_capacity."','".$message."','".$date."')";
        if ($con->query($query) == TRUE) {
            $message = "Successfully Submitted.";
            header("location:franchise.html");
            // header("location:".$url);
        } else {
            echo "Error: " . $sql . "<br>" . $con->error;
        }
    }
    if(isset($_POST["newsletter_submit"])){
        $email =  mysqli_real_escape_string($con,$_POST['nemail']);
        $url = $_POST['url'];;
        $query = "INSERT INTO `newsletter` (`id`, `email`, `created_on`) VALUES ('".$id."','".$email."','".$date."')";
        if (mysqli_connect_errno()) {
            echo "Connection Error: " . mysqli_connect_errno();
        } 
        else {
            if ($con->query($query) == TRUE) {
                // echo "Data";
                header("location:".$url);
            } else {
                echo "Error: " . $sql . "<br>" . $con->error;
            }
        }
    }
    $con->close();    
    
}


?>
