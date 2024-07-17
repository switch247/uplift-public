const express = require("express");
const {
  setAvailableTimes,
  getAvailableTimes,
  bookAppointment,
  getConsultantAppointments,
  getUserAppointments,
} = require("../controllers/AppointmentController");

const router = express.Router();

router.post("/available-times", setAvailableTimes);
router.get("/available-times/:consultantId", getAvailableTimes);
router.post("/appointments", bookAppointment);
router.get("/appointments/consultant/:consultantId", getConsultantAppointments);
router.get("/appointments/user/:userId", getUserAppointments);

module.exports = router;
