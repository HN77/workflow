import app from './server.js';

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
