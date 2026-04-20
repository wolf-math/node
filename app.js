import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/airplane/', (req, res) => {
  res.json({
    model: 'F-35 Lightening II',
    stealth: true,
    workingCondition: true
  });
});

app.get('/yummy/:food', (req, res) => {
  console.log('req.params: ', req.params);
  res.send(`Yes. ${req.params.food} is delicious!`);
});

app.post('/', (req, res) => {
  res.send('Post received');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
