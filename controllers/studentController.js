import prisma from '../lib/prisma.js';

// GET all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// CREATE new student
export const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await prisma.student.create({
      data: { name, email },
    });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
};

// GET student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get student' });
  }
};

// UPDATE student
export const updateStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updated = await prisma.student.update({
      where: { id: parseInt(req.params.id) },
      data: { name, email },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// DELETE student
export const deleteStudent = async (req, res) => {
  try {
    await prisma.student.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};
