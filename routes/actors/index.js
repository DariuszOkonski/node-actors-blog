const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/actors', (req, res) => {
    res.render('actors/index');
});

module.exports = router;