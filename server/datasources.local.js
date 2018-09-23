'use strict';

const fs = require('fs');
const {
  DB_IP,
  DB_PORT = 3306,
  DB_SCHEMA,
  DB_USER,
  DB_PWD,
  DB_CA,
  DB_CERT,
  DB_KEY,
  STORAGE_JSON,
  STORAGE_PROJECT_ID,
} = process.env;
const keyFilePath = 'keyfile.json';

fs.writeFileSync(keyFilePath, new Buffer(STORAGE_JSON, 'base64').toString());

module.exports = {
  mysql: {
    host: DB_IP,
    port: DB_PORT,
    database: DB_SCHEMA,
    user: DB_USER,
    password: DB_PWD,
    ssl: {
      ca: new Buffer(DB_CA, 'base64').toString(),
      cert: new Buffer(DB_CERT, 'base64').toString(),
      key: new Buffer(DB_KEY, 'base64').toString(),
    },
    name: 'mysql',
    connector: 'mysql',
  },
  GoogleCloudImageStorage: {
    keyFilename: keyFilePath,
    projectId: STORAGE_PROJECT_ID,
  },
};
