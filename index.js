const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'home.html'));
});

// Cart route
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'));
});
app.get('/assets/adam-java.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'adam-java.jpeg'));
});

app.get('/assets/c\\+\\+-bjarn.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'c++-bjarn.jpg'));
});


app.get('/assets/c\\+\\+-o\'reilly.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'c++-o\'reilly.jpg'));
});


app.get('/assets/civil_1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'civil_1.jpg'));
});

app.get('/assets/civil_2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'civil_2.jpg'));
});

app.get('/assets/civil_3.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'civil_3.jpg'));
});

app.get('/assets/civil_4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'civil_4.jpg'));
});

app.get('/assets/electrical_1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electrical_1.jpg'));
});

app.get('/assets/electrical_2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electrical_2.jpg'));
});

app.get('/assets/electrical_3.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electrical_3.jpg'));
});

app.get('/assets/electricla_4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electricla_4.jpg'));
});

app.get('/assets/electronic_1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electronic_1.jpg'));
});

app.get('/assets/electronic_2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electronic_2.jpg'));
});

app.get('/assets/Electronic_3.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'Electronic_3.jpg'));
});

app.get('/assets/electronics_4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'electronics_4.jpg'));
});

app.get('/assets/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'logo.png'));
});

app.get('/assets/python.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'python.jpeg'));
});

app.get('/assets/wepik-export-20231124085550KoO6.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'wepik-export-20231124085550KoO6.png'));
});

// Catalogue route
app.get('/catalogue', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'catalogue.html'));
});

// Civil route
app.get('/civil', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'civil.html'));
});

// Computer route
app.get('/computer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'computer.html'));
});

// Electrical route
app.get('/electrical', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'electrical.html'));
});

// Electronic route
app.get('/electronic', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'electronic.html'));
});

// Loclastorage route
app.get('/loclastorage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'loclastorage.html'));
});

// Login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Registration route
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

// CSS routes

app.get('/css/regisstyle.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'regisstyle.css'));
});

app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
