"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config()

const connectToDatabase = () => {
  _mongoose2.default.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('connected to database')
  })

  const db = _mongoose2.default.connection
  db.on('error', (error) => console.error(error))
}

exports. default = connectToDatabase
