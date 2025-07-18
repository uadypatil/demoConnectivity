import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(event, context) {
  try {
    if (event.httpMethod === 'POST') {
      const data = JSON.parse(event.body);
      const hire = await prisma.hireMe.create({ data });
      return {
        statusCode: 201,
        body: JSON.stringify(hire),
      };
    }

    if (event.httpMethod === 'GET') {
      const hires = await prisma.hireMe.findMany();
      return {
        statusCode: 200,
        body: JSON.stringify(hires),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
}
