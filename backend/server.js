const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
];

app.get('/', (req, res) => {
  res.send('Hello Admin Dashboard Product Service!');
});

app.get('/products', (req, res) => {
  console.log('GET /products route hit');
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Product Service running at http://localhost:${PORT}`);
});
// dummy change
