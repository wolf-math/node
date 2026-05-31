import express from 'express';
// const airplaneRoutes = require('./routes/aireplane_routes.js');
import airplaneRoutes from './routes/airplane_routes.js';
import manufacturerRoutes from './routes/manufacturer_routes.js';

const app = express();

app.use(express.json()); // for JSON

app.use('/api/airplanes', airplaneRoutes);
app.use('/api/manufacturer', manufacturerRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
