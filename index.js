const config = require('./configs/config')
const app = require('./configs/express')
require('./configs/mongoose')

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});

module.exports = app
