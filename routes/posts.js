const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');


router.get('/', verify, async (req, res) => {
    const loggedInUser = await User.findById(req.user._id);
    res.send(loggedInUser);
    //res.json({ post: { title: 'my first post', description: 'this post has really cool description' } });
});


module.exports = router;
