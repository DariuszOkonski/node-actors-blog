const express = require('express');
const router = express.Router({mergeParams: true});
const Actor = require('../../models/actor');

router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/actors', (req, res) => {
    Actor.find({}, (err, foundActors) => {
        if(err) {
            res.redirect('back');
        } else {
            res.render('actors/index', {
                actors: foundActors
            });
        }
    });
});

router.get('/actors/new', (req, res) => {
    res.render('actors/new');
})

router.get('/actors/:id', (req, res) => {
    Actor.findById(req.params.id, (err, foundActor) => {
        if(err) {
            res.redirect('back');
        } else {
            res.render('actors/show', {
                actor: foundActor
            });            
        }
    });
});

router.post('/actors', (req, res) => {
    Actor.create(req.body.actor, (err) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/actors')
        }
    })
});

module.exports = router;