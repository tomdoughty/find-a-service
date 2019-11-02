const SERVICE_TYPES = require('../constants');

module.exports = (req) => {
  if (!req || req.service || req.params.service) return null;
  return SERVICE_TYPES[req.params.service.toUpperCase()] || null;
};
