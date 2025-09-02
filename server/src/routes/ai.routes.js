const express = require('express');
const router = express.Router();
const aiControllers = require('../controllers/ai.controller');
 
router.post('/get-review' , aiControllers.getReview);

module.exports = router;