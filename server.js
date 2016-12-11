const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
const goods = require('./routes/good.routes');
const categories = require('./routes/category.routes');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'indexDep.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    mongoose.connect('mongodb://localhost/test');
    
    app.use('/dist', publicPath);
    app.use('/api', goods);
    app.use('/api', categories);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    return app;
  }
}


