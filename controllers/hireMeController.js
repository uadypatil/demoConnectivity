import prisma from '../lib/prisma.js';

export const createHireMe = async (req, res) => {
  try {
    const hire = await prisma.hireMe.create({
      data: req.body,
    });
    res.status(201).json(hire);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit hiring request.' });
  }
};

export const getAllHires = async (req, res) => {
  try {
    const hires = await prisma.hireMe.findMany();
    res.json(hires);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hiring requests.' });
  }
};
