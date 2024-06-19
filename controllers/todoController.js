const Todo = require('../models/Todo');

// create todo
const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      user: req.user.id,
      title,
      description
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// see all todo list
const fetch = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
 
// search and pagination
const getTodos = async (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;

  try {
    const query = { user: req.user.id, title: { $regex: search, $options: 'i' } };
    const todos = await Todo.find(query)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const count = await Todo.countDocuments(query);

    res.json({
      todos,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// update todo
const updateTodo = async (req, res) => {
  const { title, description, isFavorite } = req.body;

  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, isFavorite } },
      { new: true }
    );

    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// delete todo
const deleteTodo = async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Todo.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.log(err);
    res.status(500).send({message: 'Internal server error'});
  }
};

module.exports= {createTodo, fetch, getTodos, getTodoById, updateTodo, deleteTodo} 