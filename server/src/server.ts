import express from 'express';
const app = express();

app.get('/', (req, res) => {
  return res.json([
    { id: 1, name: 'Elton' },
    { id: 2, name: 'Rose' },
    { id: 3, name: 'Ericson' },
  ]);
});

app.listen(3333);