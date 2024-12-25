const plivo = require('plivo');
(function main() {
    'use strict';
 
   // If auth id and auth token are not specified, Plivo will fetch them from the environment variables.
    var client = new plivo.Client("MAODY4Y2QZODA2ZDBJYZ", "MmExNWUwYjE3OGRjOTA3ZjYwMmFlMGEwZGRmMjZl")
    client.calls.record(
        "3c1b0b9e-436d-4fb0-b416-422f195e5a51", // call uuid
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
 })();