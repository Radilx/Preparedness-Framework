const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { risk } = require('./risk/risk-assessment');

app.post('/risk', async (req, res) => {
    const {jailbreak} = req.body;
    const calculation = await risk(jailbreak);
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(calculation));
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
})
