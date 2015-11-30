<?php
/**
 * WelcomeView
 *
 * @version    1.0
 * @package    samples
 * @subpackage tutor
 * @author     Pablo Dall'Oglio
 * @copyright  Copyright (c) 2006-2012 Adianti Solutions Ltd. (http://www.adianti.com.br)
 * @license    http://www.adianti.com.br/framework-license
 */
class Home 
{
    
    

    
    function home(){
        
        $home = array('title'=>'Progs AngularJs');
        
        echo   json_encode($home);
    }
    
    function show(){
        
    }
}
?>
