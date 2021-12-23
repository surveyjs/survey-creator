@echo off

cd ../survey-library
echo -----------------------------------------
echo INSTALLING survey-library DEPENDENCIES...
echo -----------------------------------------
call npm i
echo BUILDING survey-library SOURCES...
call npm run build_core
call npm run build_knockout
call npm run build_knockout_ui

cd ../survey-creator
echo -----------------------------------------
echo INSTALLING survey-creator DEPENDENCIES...
echo -----------------------------------------
call npm i

cd packages/survey-creator-core
echo -----------------------------------------
echo INSTALLING survey-creator-core DEPENDENCIES...
echo -----------------------------------------
call npm i
echo -----------------------------------------
echo BUILDING survey-creator-core SOURCES...
echo -----------------------------------------
call npm run build

cd ../survey-creator-knockout
echo -----------------------------------------
echo INSTALLING survey-creator-knockout DEPENDENCIES...
echo -----------------------------------------
call npm i
echo -----------------------------------------
echo STARTING Knockout DEV SERVER...
echo -----------------------------------------
call npm run start

pause