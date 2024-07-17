const express = require('express');
const {
  createConsultant,
  getAllConsultants,
  getConsultantById,
  updateConsultantById,
  deleteConsultantById,
} = require('../controllers/consultantController');

const router = express.Router();

router.post('/', createConsultant);
router.get('/', getAllConsultants);
router.get('/:id', getConsultantById);
router.put('/:id', updateConsultantById);
router.delete('/:id', deleteConsultantById);

module.exports = router;
