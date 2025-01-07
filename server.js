const { deepStrictEqual } = require('assert');
const { getFips } = require('crypto');
const { BADFLAGS } = require('dns');
const express = require('express');
const { appendFile, fdatasync } = require('fs');
const path = require('path');
const { loadEnvFile } = require('process');
const { getDefaultHighWaterMark } = require('stream');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'HomePage', 'index.html'));
});
app.get('/Courses', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'page-2', 'Courses.html'));
});
app.get('/Resources', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'Page-3', 'Library.html'));
});
app.get('/SuccessStories', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'Page-4', 'SuccessStories.html'));
});
app.get('/AboutUs', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'page-5', 'ProfessorAcademyproject.html'));
});
app.get('/ContactUs', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'Page-6', 'ContactUs.html'));
});
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});