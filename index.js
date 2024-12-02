import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
