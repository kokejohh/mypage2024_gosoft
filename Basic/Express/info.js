const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (rea, res) => {
    res.send('Info');
});

router.get('/me', (req, res) => {
    res.send('Pitchakorn Thiprangsi');
})

module.exports = router;