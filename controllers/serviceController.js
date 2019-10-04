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

exports.results = ({ params, body: { latitude, longitude, location} }, res) => {
	// Get service type constant
	const service = SERVICE_TYPES[params.service.toUpperCase()];
	
	// Default object to be passed to the view
	const renderObj = {
		// Service type object
		service,
		// Postcode or geolocation default
		location: location ? `"${location.toUpperCase()}"` : 'your location'
	};
	
	// If coordinates are in the body skip postcode lookup
	if (latitude && longitude) {
		// Get services
		getServices(latitude, longitude, service.code)
			// Render results with services
			.then(services => res.render('results.html', {
				...renderObj,
				services
			}));
	} else {
		// Get coordinated from postcode
		getLatLong(location)
			.then(({ latitude, longitude }) => {
				// Get services
				getServices(latitude, longitude, service.code).then(services => {
					// Render results with services
					return res.render('results.html', {
						...renderObj,
						services
					})
				});
		})
		.catch(() => {
			// Show validation error for invalid postcode
			return res.render('search.html', { 
				errorMessage: 'Please enter a valid postcode',
				service
			})
		});
	}
};
