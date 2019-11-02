const getLatLong = require('../utils/getLatLong');
const getServices = require('../utils/getServices');
const getService = require('../utils/getService');

exports.index = (_, res) => res.render('index.html');

exports.search = (req, res) => res.render('search.html', {
  service: getService(req),
});

exports.results = async (req, res) => {
  const service = getService(req);
  const { location } = req.body;
  let { latitude, longitude } = req.body;

  try {
    if (location) {
      ({ latitude, longitude } = await getLatLong(location));
    }
    return res.render('results.html', {
      location,
      service,
      services: await getServices(latitude, longitude, service.code),
    });
  } catch (error) {
    return res.render('search.html', {
      errorMessage: 'Please enter a valid postcode',
      service,
    });
  }
};
