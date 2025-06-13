import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const router = Router();

// Validation middleware
const validateContactForm = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  body('email').isEmail().normalizeEmail().withMessage('Must be a valid email address'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long'),
];

// Contact form submission endpoint
router.post('/', validateContactForm, async (req: Request<{}, {}, ContactFormData>, res: Response) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;
    
    // Here you would typically send an email or store the contact form data
    // For now, we'll just log it
    console.log('Contact form submission:', { name, email, message });

    return res.status(200).json({
      message: 'Contact form submitted successfully',
      data: { name, email, message }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      message: 'An error occurred while processing your request'
    });
  }
});

export const contactRouter = router; 