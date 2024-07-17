const prisma = require('../config/prisma_config');

// Create a new consultant
 const createConsultant = async (req, res) => {
  const { userId } = req.body;

  try {
    const consultant = await prisma.consultant.create({
      data: {
        userId,
      },
    });

    res.status(201).json(consultant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create consultant' });
  }
};

// Get all consultants
 const getAllConsultants = async (req, res) => {
  try {
    const consultants = await prisma.consultant.findMany({include: {availableTimes:true,appointments:true, users: true}});
    res.status(200).json(consultants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch consultants' });
  }
};

// Get consultant by ID
 const getConsultantById = async (req, res) => {
  const { id } = req.params;

  try {
    const consultant = await prisma.consultant.findUnique({
      where: { id },
      include: {availableTimes:true,appointments:true, users: true}
    });

    if (!consultant) {
      return res.status(404).json({ error: 'Consultant not found' });
    }

    res.status(200).json(consultant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch consultant' });
  }
};

// Update consultant by ID
 const updateConsultantById = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const updatedConsultant = await prisma.consultant.update({
      where: { id },
      data: {
        userId,
      },
    });

    res.status(200).json(updatedConsultant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update consultant' });
  }
};

// Delete consultant by ID
 const deleteConsultantById = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.consultant.delete({
      where: { id },
    });

    res.status(200).json({ message: 'Consultant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete consultant' });
  }
};


module.exports = {createConsultant,deleteConsultantById, getAllConsultants, getConsultantById, updateConsultantById};