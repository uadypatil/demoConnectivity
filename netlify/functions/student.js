import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler(event, context) {
  if (event.httpMethod === 'GET') {
    const students = await prisma.student.findMany();
    return {
      statusCode: 200,
      body: JSON.stringify(students),
    };
  }

  if (event.httpMethod === 'POST') {
    const data = JSON.parse(event.body);
    const newStudent = await prisma.student.create({ data });
    return {
      statusCode: 201,
      body: JSON.stringify(newStudent),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method Not Allowed' }),
  };
}
