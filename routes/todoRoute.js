const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createTodo,
  fetch,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

router.post('/create', auth, createTodo);
router.get('/fetch', fetch)
router.get('/', auth, getTodos);
router.get('/:id', auth, getTodoById);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

module.exports = router;
