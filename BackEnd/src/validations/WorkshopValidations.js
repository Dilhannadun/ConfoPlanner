const Joi = require("joi");

const joiWorkshopSchema = Joi.object({
  PresenterRef: Joi.string().min(4).max(256).required(),

  title: Joi.string().alphanum().min(4).max(256).required(),
  
  description: Joi.string().alphanum().min(4).max(1024).required(),

  presentationFileURL: Joi.string().min(4).max(256).required(),

  estimatedDuration: Joi.number().required(),
});

module.exports = joiWorkshopSchema;
