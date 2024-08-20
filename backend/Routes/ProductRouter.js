const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json({
        success: true,
        message: "Authenticated successfully. Welcome to the MERN stack authentication and authorization project!"
    });
});

module.exports = router;