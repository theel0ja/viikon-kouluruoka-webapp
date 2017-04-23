<?php
    require 'vendor/xamin/handlebars.php/src/Handlebars/Autoloader.php';
    Handlebars\Autoloader::register();

    $engine = new Handlebars\Handlebars;

    // settings
    $languages = array("fi", "sv", "en");
    $files = array("../index.template.html");

    foreach($languages as $lang) {
        $translations = file_get_contents("translations/" . $lang . ".json");
        $translations = json_decode($translations, TRUE);

        foreach($files as $file) {
            $resultFile = str_replace(".template", "." . $lang, $file);

            $result = $engine->render( file_get_contents( $file ), $translations );

            file_put_contents($resultFile, $result);
        }
    }
?>