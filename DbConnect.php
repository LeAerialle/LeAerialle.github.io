<?php

include_once 'Constants.php';
class DbConnect {
    private $con;

    function __construct()
    {
        
    }

    function connect() {
        $this->con = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);

        if(mysqli_connect_errno()) {
            echo "Could not connect to database".mysqli_connect_error();
        } else {
            echo "Connection!";
        }

        return $this->con;
    }
}

?>