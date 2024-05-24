const express = require('express');
const app = express();
const port = 3000;

app.get('/hello/:world', (req, res) => {
    const world = req.params.world;
    res.json({ message: `Hello ${world}` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
