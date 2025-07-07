const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Chess server is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});