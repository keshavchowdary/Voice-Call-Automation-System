var plivo = require('plivo');

(function main() {
    'use strict';

    var client = new plivo.Client("MAODY4Y2QZODA2ZDBJYZ","MmExNWUwYjE3OGRjOTA3ZjYwMmFlMGEwZGRmMjZl");
    client.calls.create(
        "+18887323809", // from
        "+917382000036", // to
        "https://c4c3-2401-4900-1c55-5f97-6bde-d882-d831-7397.ngrok-free.app/response", // answer url
        {
            answerMethod: "GET",
        },
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();