var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('angularNav server part is alive!!!');
});


app.listen(3000);
console.log('express server running  on port 3000');
