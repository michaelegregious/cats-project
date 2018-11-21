const express = require('express');
const request = require('request');
const PORT = 8080 || process.env.PORT;
const path = require('path');
const app = express();

const imgUrl =
  'http://thecatapi.com/api/images/get?format=xml&results_per_page=25';

const factsUrl = 'https://catfact.ninja/facts?limit=25';

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/catPics', async (req, res, next) => {
  req.pipe(request(imgUrl)).pipe(res);
});

app.get('/catFacts', async (req, res, next) => {
  req.pipe(request(factsUrl));
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
