const getLatLong = require('../utils/getLatLong');
const getServices = require('../utils/getServices');

const SERVICE_TYPES = require('../constants');

exports.index = (_, res) => {
	// Render homepage
    return res.render('index.html')
};

exports.search = ({ params }, res) => {
	// Get service type constant
	const service = SERVICE_TYPES[params.service.toUpperCase()];
	// Render search page
	return res.render('search.html', { service });
};

exports.results = async({ params, body: { latitude, longitude, location } }, res) => {
	const service = SERVICE_TYPES[params.service.toUpperCase()];

	try {
		if (!latitude || !longitude) {
			({ latitude, longitude } = await getLatLong(location));
		}
		return res.render('results.html', {
			service,
			services: await getServices(latitude, longitude, service.code),
			location: location ? `"${location.toUpperCase()}"` : 'your location'
		});

	} catch(err) {
		console.log(err)
		return res.render('search.html', { 
			errorMessage: 'Please enter a valid postcode',
			service
		})
	}
};
