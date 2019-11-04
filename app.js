const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/find-a-service', serviceRoutes);
app.get('/', (_, res) => res.redirect('/find-a-service'));
app.get('*', (_, res) => res.render('error.html'));

nunjucks.configure([
  './views',
  'node_modules/nhsuk-frontend/packages/components',
], {
  autoescape: true,
  express: app,
  watch: true,
});

console.log('http://localhost:3000');
app.listen(3000);
