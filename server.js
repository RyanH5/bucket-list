const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const jwt = require('jsonwebtoken');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/api/v1/titles', (request, response) => {
  const title = request.body;

  for (let requiredParameter of ['title']) {
    if (!project[requiredParameter]) {
      return response 
        .status(422)
        .send({error: `Expected format: {name:<String>} You're missing a "${requiredParameter}" property.`});
    }
  }

  database('bucket_list_titles').insert(title, 'id')
  .then(title => {
      response.status(201).json({id: title[0]});
    })
    .catch(error => {
      response.status(500).json({error});
    });
});

app.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});