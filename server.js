const express = require('express');
const app = express();
const { protectedRoute } = require('./middlewares/protectedRoute');
const logger = require('./middlewares/logger');
const morgan = require('morgan');

app.use(express.json());

app.use(morgan('dev'));

app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8000, () => console.log('Listening on port 8000'));
