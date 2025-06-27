const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Editor' },
];

app.get('/', (req, res) => {
  res.send('Hello Admin Dashboard!');
});

app.get('/users', (req, res) => {
  console.log('GET /users route hit');
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
#Sidak