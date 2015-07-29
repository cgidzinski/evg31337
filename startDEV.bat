start cmd.exe @cmd /k "TIMEOUT 0 & nodemon server.js"
cd C:\Program Files\MongoDB\Server\3.0\bin
mongod --dbpath="%~dp0\"
pause