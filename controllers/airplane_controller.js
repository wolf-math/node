import airplanes from '../airplane_info.js';

function airplaneFilter(searchPlane) {
  let match = airplanes.find((airplane) => {
    return airplane.name === searchPlane;
  });

  if (!match) {
    match = airplanes.find((airplane) => {
      return airplane.id.replace('-', '') === searchPlane.replace('-', '');
    });
  }

  return match || { id: 'not found' };
}

function getAirplane(req, res) {
  const findPlane = airplaneFilter(req.params.airplane);
  res.send(findPlane);
}

export { getAirplane };
