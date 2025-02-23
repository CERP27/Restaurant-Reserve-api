import * as Joi from 'joi';

export const configurationValidate = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'automated_tests')
    .required(),
  PORT: Joi.number().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
});
