const express = require('express');
const app = express();

const indexRouter = require('./routes/actors/index');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(indexRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at ${port}...`);
})