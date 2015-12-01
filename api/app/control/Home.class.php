<?php

use Pwd\PAngular\PAngularController;

class Home extends PAngularController{

public function __contruct(){
  parent::__construct();
}

    function home(){

        $home = array('title'=>'Progs AngularJs');

    $this->res($home);
    }


}
?>
