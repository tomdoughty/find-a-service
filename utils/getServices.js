const axios = require('axios');

module.exports = (latitude, longitude, serviceCode) => {
	return new Promise((resolve, reject) => {
		axios({
			method: 'POST',
			url: "https://api.nhs.uk/service-search/search?api-version=1",
			headers: {
				"Content-Type": "application/json",
				"subscription-key": "813ed0a46ebd481bab9984555ed0f45b"
			},
			data: {
				"filter": `OrganisationTypeID eq '${serviceCode}'`,
				"orderby": `geo.distance(Geocode, geography'POINT(${longitude} ${latitude} )')`,
				"top": 25,
				"skip": 0,
				"count": true
			}
		})
		.then(({data}) => resolve(data.value))
		.catch(error => reject(error));
	})
};
