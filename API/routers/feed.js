const express = require('express');
const feedControllers = require('../controllers/feed');

const router = express.Router();

//GET /feed/posts
router.get('/posts', feedControllers.getPosts);

//POST /feed/post
router.post('/post', (req, res) => {
  res.json({ data: '2' });
});

module.exports = router;
