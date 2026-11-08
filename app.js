// Import the express module
import express from 'express';

const app = express();

const PORT = 3002;

const meetingData = [];

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/confirm-meeting', (req, res) => {
    res.render('confirm');
});

app.post('/submit-meeting', (req, res) => {
    const meetingInfo = req.body;
    meetingInfo['timestamp'] = new Date();

    meetingData.push(meetingInfo);
    console.log(meetingInfo);

    res.render('confirm', {meetingInfo});
});

app.get('/admin', (req, res) => {
    res.render('admin', {meetingData});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});