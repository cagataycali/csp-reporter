#!/bin/sh
node index.js &
sleep 5

curl --fail --location --request POST 'http://localhost:8000/' \
--header 'Content-Type: application/csp-report' \
--data-raw '{}'

killall node