
<?php

    if (!empty($_POST)) {
        $servername = 'localhost';
        $username = 'root';
        $password = '';
        $database = 'corona';
        //database connection
        $conn = mysqli_connect($servername, $username, $password, $database);
        if (!$conn) {
            die('Connection Failed:' . mysqli_connect_error());
        }

        $name = $_POST['name'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        //questions
        $headache = $_POST['headache'];
        $fever = $_POST['fever'];
        $cough = $_POST['cough'];
        $diarrhoea = $_POST['diarrhoea'];
        $difficultyInBreathing = $_POST['difficultyInBreathing'];
        $bodyAche = $_POST['bodyAche'];



        $sql = "insert into form (name, age, gender ,headache , fever , cough , diarrhoea , difficultyInBreathing , bodyAche)
    values('$name', '$age', '$gender', '$headache' , '$fever' , '$cough' , '$diarrhoea' , '$difficultyInBreathing' , '$bodyAche' )";
        $run = mysqli_query($conn, $sql);
        if ($run) {
            echo 'Data added';
        } else {
            echo 'Data not added' . mysqli_error($conn);
        }
        mysqli_close($conn);
    }

    ?>
