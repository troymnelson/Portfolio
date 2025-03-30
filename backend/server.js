const express = require('express');

const app = express();

app.use(express.json());

app.listen(6969, () => {
    console.log("App watching on localhost:6969")
})