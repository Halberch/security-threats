const express = require('express');
const app = express();
const PORT = 4200;
const xd = a;

app.use(express.static('www'));
app.get('/', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
