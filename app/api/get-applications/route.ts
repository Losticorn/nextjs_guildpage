// pages/api/applications.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all applications from the database
      const applications = await prisma.application.findMany();

      // Return the applications as JSON
      res.status(200).json(applications);
    } catch (error) {
      console.error('Error fetching applications:', error);
      res.status(500).json({ error: 'An error occurred while fetching applications' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // Handle any other HTTP methods (e.g., POST, PUT, DELETE) with a 405 error
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
