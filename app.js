const port = (process.env.PORT || 8080)
const express  = require('express')
const app = express()
const bodyParser = require('body-parser')
const compress = require('compression')

const mongoose = require('mongoose');
import goods from './routes/good.routes';
import categories from './routes/category.routes';


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test');

app.use(compress());


app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api', goods);
app.use('/api', categories);

app.get('/', (req, res) => {
  res.render('index', function(err, html) {
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

