import airplanes from '../airplane_info.js';

function airplaneFilter(searchPlane) {
  console.log(searchPlane);
  let match = airplanes.filter((airplane) => {
    return airplane.name === searchPlane;
  });

  if (match.length === 0) {
    match = airplanes.filter((airplane) => {
      return airplane.id === searchPlane;
    });
  }

  // TODO match airplanes loosely. (No hyphens)

  return match;
}

function getAirplane(req, res) {
  // console.log(req.params);
  const findPlane = airplaneFilter(req.params.airplane);
  console.log(findPlane);
  res.send(findPlane);
}

export { getAirplane };
