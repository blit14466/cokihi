const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/public/profile.html');
});

app.get('/settings', (req, res) => {
    res.sendFile(__dirname + '/public/settings.html');
});

app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/public/help.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
