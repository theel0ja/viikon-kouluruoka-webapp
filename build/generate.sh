rm ../index.fi.html ../index.en.html ../index.sv.html
composer install

php generate.php

rm -rf vendor/
rm composer.lock
