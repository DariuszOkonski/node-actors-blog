const express = require('express');
const router = express.Router({mergeParams: true});
const Actor = require('../../models/actor');

router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/actors', (req, res) => {
    Actor.find({}, (err, foundActors) => {
        if(err) {
            console.log('ERROR')
        } else {
            res.render('actors/index', {
                actors: foundActors
            });
        }
    })



});

router.get('/actors/:id', (req, res) => {
    console.log(req.params.id);

    res.send('Show page');
})

module.exports = router;