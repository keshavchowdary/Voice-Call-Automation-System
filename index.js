const express = require('express');

const app = express();
const plivo = require('plivo');

app.use(express.json());

const { SOURCE, DESTINATION } = require('./phone-numbers');

const PORT = 5436;
const PLIVO_AUTH_ID = 'MAODY4Y2QZODA2ZDBJYZ';
const PLIVO_AUTH_TOKEN = 'MmExNWUwYjE3OGRjOTA3ZjYwMmFlMGEwZGRmMjZl';


const plivoClient = new plivo.Client(PLIVO_AUTH_ID, PLIVO_AUTH_TOKEN);

app.post('/call', (req, res) => {

    const { user, message } = req.body;

    const toNumber = DESTINATION[user];
        

    plivoClient.calls.create(
        SOURCE.KESHAV_TEST_US,
        toNumber,
        `https://c4c3-2401-4900-1c55-5f97-6bde-d882-d831-7397.ngrok-free.app/response?message=${message}`,
        {
            answerMethod: "GET",
            record: true,
        },
    ).then(function (response) {
        console.log(response);
        res.status(200).send(response);
    }, function (err) {
        console.error(err);
        res.status(500).send(response);
    });
});

app.get('/response', (req, res) => {
    const message = req.query.message || 'Hi';
    const callId = req.query.callId;
    const responseXML = `
    <Response>
        <Speak language="en-IN" rate="medium" volume="default">${message}</Speak>
        <Record />
        <Hangup />
    </Response>
    `;
    // const responseXML = `
    //     <Response>
    //         <Speak language="en-IN" rate="medium" volume="default">Hello, this call will be recorded.</Speak>
    //         <Pause length="5" /> <!-- Optional: Add a pause to ensure the message is heard -->
    //         <Redirect method="GET">https://your-server.com/handle-recording</Redirect>
    //     </Response>
    // `;
    res.set('Content-Type', 'application/xml');
    res.send(responseXML);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})