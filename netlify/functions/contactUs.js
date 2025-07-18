import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(event, context) {
  try {
    if (event.httpMethod === 'POST') {
      const data = JSON.parse(event.body);
      const contact = await prisma.contactUs.create({ data });
      return {
        statusCode: 201,
        body: JSON.stringify(contact),
      };
    }

    if (event.httpMethod === 'GET') {
      const contacts = await prisma.contactUs.findMany();
      return {
        statusCode: 200,
        body: JSON.stringify(contacts),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
}
