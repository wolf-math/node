import express from 'express';
// const airplaneRoutes = require('./routes/aireplane_routes.js');
import airplaneRoutes from './routes/airplane_routes.js';

const app = express();

app.use(express.json()); // for JSON

app.use('/api/airplanes', airplaneRoutes);

// http://localhost:3000/api/query/?name=hello
// app.get('/api/query', (req, res) => {
//   const name = req.query.name.toLowerCase();

//   res.json(name);
// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
