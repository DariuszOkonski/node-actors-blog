const express = require('express');
const router = express.Router({mergeParams: true});

const actors = [
    {
        _id: 1, 
        name: 'Arnold', 
        surname: 'Schwarzenegger', 
        country: 'Austria', 
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Arnold_Schwarzenegger_edit%28ws%29.jpg/528px-Arnold_Schwarzenegger_edit%28ws%29.jpg'},
    {_id: 2, name: 'Sylwester', surname: 'Stallone', country: 'USA', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sylvester_Stallone_%287588423560%29.jpg/800px-Sylvester_Stallone_%287588423560%29.jpg'},
    {_id: 3, name: 'Dolph', surname: 'Lundgreen', country: 'Sweden', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dolph_Lundgren_%2815186029635%29.jpg/428px-Dolph_Lundgren_%2815186029635%29.jpg'}
]

router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/actors', (req, res) => {
    res.render('actors/index', {
        actors
    });
});

router.get('/actors/:id', (req, res) => {
    console.log(req.params.id);

    res.send('Show page');
})

module.exports = router;