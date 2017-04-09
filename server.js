const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Express server listening on %d, in %s mode', (process.env.PORT || 5000), app.get('env'));
});
