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
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Arnold_Schwarzenegger_edit%28ws%29.jpg/528px-Arnold_Schwarzenegger_edit%28ws%29.jpg',
            description: 'Vestibulum tempus, ipsum ac pulvinar tincidunt, lectus sapien maximus lectus, et tempor quam est vel nunc. Donec vehicula nibh vitae lorem bibendum, sit amet aliquam ante mollis. Etiam urna metus, sodales in auctor sed, molestie sed magna. Etiam quis lacus quam. Nulla quis velit fringilla, mollis ante in, viverra turpis. In in sem molestie, mattis felis quis, hendrerit nibh. Nullam ante erat, faucibus quis risus in, fermentum accumsan quam. Aliquam erat volutpat. In sit amet libero sit amet arcu porttitor accumsan eget nec leo. Nullam quis elementum dui. Quisque eget arcu vitae erat venenatis condimentum non sed nibh. Duis in consequat velit. Pellentesque feugiat neque eget euismod laoreet. Donec dolor ipsum, lacinia non scelerisque vel, varius sit amet orci. Pellentesque ut molestie purus. Phasellus sed auctor nisl. Vestibulum volutpat consectetur lectus sit amet sodales. Sed posuere leo id risus suscipit ultrices. Morbi pulvinar efficitur risus, fringilla ultrices lectus efficitur nec. Vivamus eget erat arcu. Vestibulum cursus laoreet ipsum, quis vulputate neque laoreet vel. Donec quis tristique nisl, sit amet euismod dui.'
        },
        {
            name: 'Sylwester', 
            surname: 'Stallone', 
            country: 'USA', 
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sylvester_Stallone_%287588423560%29.jpg/800px-Sylvester_Stallone_%287588423560%29.jpg',
            description: 'Ut sollicitudin nunc nunc, sollicitudin fringilla ipsum consequat et. Suspendisse potenti. Vivamus convallis viverra ipsum, sed volutpat nunc eleifend id. Suspendisse potenti. Etiam sagittis convallis ipsum et condimentum. Duis at ipsum vestibulum erat ullamcorper vulputate. Nunc eu lobortis magna, ac vulputate nibh. Vestibulum condimentum odio leo, ac pulvinar eros lacinia id. Fusce tortor dui, placerat nec mi a, iaculis facilisis erat. Praesent eros eros, vulputate vitae tortor a, convallis maximus velit. Cras eros diam, blandit non purus eu, pretium eleifend lacus. Phasellus in nulla at justo molestie fringilla in vitae metus. Ut quis lobortis nisl, eget tempus enim.'
        },
        {
            name: 'Dolph', 
            surname: 'Lundgreen', 
            country: 'Sweden', 
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dolph_Lundgren_%2815186029635%29.jpg/428px-Dolph_Lundgren_%2815186029635%29.jpg',
            description: 'Cras feugiat dolor gravida nisi consectetur tempus. Donec laoreet vitae dolor eu pharetra. Aenean sit amet lectus a justo fringilla maximus. Mauris at varius tellus, vel sagittis nisi. Praesent in ipsum ac turpis placerat fermentum in a mi. Praesent sit amet odio condimentum, sagittis quam eu, imperdiet sapien. Suspendisse fringilla mi vel consequat semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam hendrerit, nulla et consectetur gravida, ex mi consequat dolor, in viverra lacus quam et nulla. Suspendisse vitae pretium erat. Phasellus consectetur orci nisi, eget egestas nulla auctor sagittis. Nullam at felis lectus.'
        }
    ]

    actors.forEach(actor => {
        Actor.create(actor);
    })


}
    