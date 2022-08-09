const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.route('/').get((req, res) => {
  res.send('users get route');
});

router
  .route('/cool')
  .get((req, res) => {
    res.render('cool', { title: 'Cool', messages });
  })
  .post((req, res) => {
    const { text, user } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect(req.originalUrl);
  });
module.exports = router;
