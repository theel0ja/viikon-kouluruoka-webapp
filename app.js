// Initialize app
var myApp = new Framework7();
 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});


function primarySchools(lang) {
    'use strict';
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content-primaryschools").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://lab.theel0ja.info/viikon-kouluruoka-api-dev/Public/html/turku_alakoulut.php?theme=framework7&lang=" + lang, true);
    xhttp.send();
}

function secondarySchools(lang) {
    'use strict';
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content-secondaryschools").innerHTML = this.responseText;
            document.getElementById("content-secondaryschools").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://lab.theel0ja.info/viikon-kouluruoka-api-dev/Public/html/turku_ylakoulut.php?theme=framework7&lang=" + lang, true);
    xhttp.send();
}