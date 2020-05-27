const express = require('express');
const router = express.Router({mergeParams: true});
const expressSanitizer = require('express-sanitizer');
const Actor = require('../../models/actor');

router.use(expressSanitizer());

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
    const newActor = {
        name: req.sanitize(req.body.actor.name),
        surname: req.sanitize(req.body.actor.surname),
        country: req.sanitize(req.body.actor.country),
        picture: req.sanitize(req.body.actor.picture),
        description: req.sanitize(req.body.actor.description)
    }
    console.log(newActor);

    Actor.create(newActor, (err) => {
        if(err) {
            res.redirect('back');
        } else {
            res.redirect('/actors')
        }
    })
});

module.exports = router;