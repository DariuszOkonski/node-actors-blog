const express = require('express');
const app = express();
const Actor = require('./models/actor');

const indexRouter = require('./routes/actors/index');
const mongoConnection = require('./models/connection');

mongoConnection();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(indexRouter);


// seed();
// listener ===================================
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at ${port}...`);
})

//seed ================================================
function seed() {
    const actors = [
        {
            name: 'Arnold', 
            surname: 'Schwarzenegger', 
            country: 'Austria', 
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Arnold_Schwarzenegger_edit%28ws%29.jpg/528px-Arnold_Schwarzenegger_edit%28ws%29.jpg'
        },
        {
            name: 'Sylwester', 
            surname: 'Stallone', 
            country: 'USA', 
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sylvester_Stallone_%287588423560%29.jpg/800px-Sylvester_Stallone_%287588423560%29.jpg'
        },
        {
            name: 'Dolph', 
            surname: 'Lundgreen', 
            country: 'Sweden', 
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dolph_Lundgren_%2815186029635%29.jpg/428px-Dolph_Lundgren_%2815186029635%29.jpg'
        }
    ]

    actors.forEach(actor => {
        Actor.create(actor);
    })


}
    