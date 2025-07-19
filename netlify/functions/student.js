import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(event, context) {
  if (event.httpMethod === 'GET') {
    const students = await prisma.student.findMany();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(students),
    };
  }

  if (event.httpMethod === 'POST') {
    const data = JSON.parse(event.body);
    const newStudent = await prisma.student.create({ data });
    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(newStudent),
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
}
