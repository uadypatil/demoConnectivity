// controllers/contactUsController.js
import prisma from '../lib/prisma.js';

export const submitContactForm = async (req, res) => {
  try {
    const contact = await prisma.contactUs.create({
      data: req.body,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contactUs.findMany();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact entries.' });
  }
};
