const Joi = require('joi');

const schemas = {
  seriesQuery: Joi.object({
    startYear: Joi.string().pattern(/^\d{4}$/).default('2015'),
    endYear: Joi.string().pattern(/^\d{4}$/).default(new Date().getFullYear().toString()),
  }),
  geoQuery: Joi.object({
    state: Joi.string().length(2).optional(),
    county: Joi.string().optional(),
  }),
};

module.exports = {
  validate: (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
  schemas,
};