import express from 'express';
import { submitContactForm } from '../controllers/contactUsController.js';

const router = express.Router();

router.post('/', submitContactForm);
// router.get('/', getAllContacts);

export default router;
