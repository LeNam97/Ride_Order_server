const Joi = require('@hapi/joi')

require('dotenv').config()
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
      // .allow(['development', 'production', 'test', 'provision'])
      .default('development'),
  SERVER_PORT: Joi.number()
      .default(4040),
  MONGOOSE_DEBUG: Joi.boolean()
      .when('NODE_ENV', {
        is: Joi.string().equal('development'),
        then: Joi.boolean().default(true),
        otherwise: Joi.boolean().default(false)
      }),
  JWT_SECRET: Joi.string().required()
      .description('JWT Secret required to sign'),
  MONGO_HOST: Joi.string().required()
      .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
      .default(27017)
}).unknown().required();

const {error, value: envVars} = envVarsSchema.validate(process.env);
if (error) {
}
const configDebug = {
  env: 'development',
  port: '4000',
  jwtSecret: '',
  mongo: {
    host: 'mongodb://localhost/RiceOrder',
    port: 27017
  },
}

module.exports = configDebug;
