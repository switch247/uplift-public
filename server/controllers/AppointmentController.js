

const prisma = require('../config/prisma_config');
// Set available times
 const setAvailableTimes = async (req, res) => {
  const { consultantId, availableTimes } = req.body;

  try {
    const consultant = await prisma.consultant.findUnique({ where: { id: consultantId } });

    if (!consultant) {
      return res.status(404).json("Consultant not found");
    }

    await prisma.availableTime.createMany({
      data: availableTimes.map((time) => ({
        consultantId: consultantId,
        startTime: new Date(time.startTime),
        endTime: new Date(time.endTime),
      })),
    });

    res.status(200).json("Available times set successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get consultant's available times
 const getAvailableTimes = async (req, res) => {
  const { consultantId } = req.params;

  try {
    const availableTimes = await prisma.availableTime.findMany({
      where: { consultantId },
    });

    res.status(200).json(availableTimes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Book an appointment
 const bookAppointment = async (req, res) => {
  const { userId, consultantId, startTime } = req.body;

  try {
    const appointment = await prisma.appointment.create({
      data: {
        userId,
        consultantId,
        startTime: new Date(startTime),
        endTime: new Date(new Date(startTime).getTime() + 60 * 60 * 1000), // 1 hour session
      },
    });

    res.status(200).json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get consultant's appointments
 const getConsultantAppointments = async (req, res) => {
  const { consultantId } = req.params;

  try {
    const appointments = await prisma.appointment.findMany({
      where: { consultantId },
      include: { user: true },
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get user's appointments
 const getUserAppointments = async (req, res) => {
  const { userId } = req.params;

  try {
    const appointments = await prisma.appointment.findMany({
      where: { userId },
      include: { consultant: true },
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {  setAvailableTimes,  getAvailableTimes,  bookAppointment,  getConsultantAppointments,  getUserAppointments,};  