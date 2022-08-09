const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('users get route');
});
router.get('/cool', (req, res) => {
  res.render('index', { title: 'Cool', text: 'You are so cool' });
});
module.exports = router;
