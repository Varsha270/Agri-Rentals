<?php 

include 'connect.php';

if(isset($_POST['signUp'])){
    $fname = $_POST['fName'];
    $lname = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Use password_hash() for secure password hashing
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Check if the email already exists
    $checkEmail = "SELECT * FROM login WHERE email = ?";
    $stmt = $con->prepare($checkEmail);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        echo "Email Address Already Exists!";
    } else {
        // Email is unique, proceed with insertion or other operations
        // ...
    }
    
    $stmt->close();
        // Use a prepared statement for the insert query
        $insertQuery = "INSERT INTO login(fname, lname, email, password) VALUES ('$fname','$lname','$email','$password')";
        if ($con->query($insertQuery)==TRUE)
        {
                    header("location: homepage.php");
                }
                else{
                    echo "Error:".$con->error;
                }
}



if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM login WHERE email = ?";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        
        // Use password_verify() to check the hashed password
        if (password_verify($password, $row['password'])) {
            session_start();
            $_SESSION['email'] = $row['email'];
            header("Location: homepage.php");
            exit();
        } 
        else {
            echo "Incorrect Email or Password";
        }
    } 
    $stmt->close();
   }

$con->close();
?>