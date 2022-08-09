const express = require('express');
const userController = require('../controllers/userController');

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
  .post(userController.newMessage(messages));
module.exports = router;
