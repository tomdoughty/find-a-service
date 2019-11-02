const axios = require('axios');

module.exports = async (latitude, longitude, serviceCode) => {
  try {
    const result = await axios({
      method: 'POST',
      url: 'https://api.nhs.uk/service-search/search?api-version=1',
      headers: {
        'Content-Type': 'application/json',
        'subscription-key': '813ed0a46ebd481bab9984555ed0f45b',
      },
      data: {
        filter: `OrganisationTypeID eq '${serviceCode}'`,
        orderby: `geo.distance(Geocode, geography'POINT(${longitude} ${latitude} )')`,
        top: 25,
        skip: 0,
        count: true,
      },
    });
    return result.data.value;
  } catch (error) {
    return error;
  }
};
