const SERVICE_TYPES = require('../constants');

module.exports = (req) => {
  if (!req || req.service) return null;
  const res = SERVICE_TYPES[req.params.service.toUpperCase()] || null;
  return res;
};
