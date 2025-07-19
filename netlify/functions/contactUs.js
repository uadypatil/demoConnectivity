import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(event, context) {
  try {
    if (event.httpMethod === 'POST') {
      const data = JSON.parse(event.body);
      const contact = await prisma.contactUs.create({ data });
      return {
        statusCode: 201,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(contact),
      };
    }

    if (event.httpMethod === 'GET') {
      const contacts = await prisma.contactUs.findMany();
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(contacts),
      };
    }

    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
}
