const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from your custom API!" });
});

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
