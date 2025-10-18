
const express = require('express');
const app = express();
app.use(express.json());

// Simple calculator routes
app.get('/add', (req, res) => res.json({ result: +req.query.a + +req.query.b }));
app.get('/subtract', (req, res) => res.json({ result: +req.query.a - +req.query.b }));
app.get('/multiply', (req, res) => res.json({ result: +req.query.a * +req.query.b }));
app.get('/divide', (req, res) => res.json({ result: +req.query.a / +req.query.b }));

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
