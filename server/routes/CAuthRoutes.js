const express = require('express');
const { registerConsultant, loginConsultant } = require('../controllers/consultantAuthController');

const router = express.Router();

router.post('/register', registerConsultant);
router.post('/login', loginConsultant);

module.exports = router;
