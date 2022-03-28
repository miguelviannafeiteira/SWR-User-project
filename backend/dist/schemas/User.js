"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);







const UserSchema = new _mongoose2.default.Schema({
  _id: String,
  email: String,
  firstName: String
}, {
  timestamps: true
}
)

exports. default = _mongoose2.default.model('User', UserSchema)
