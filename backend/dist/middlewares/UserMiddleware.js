"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

var _uuid = require('uuid');









class UserMiddleware {
   async validateId (req, res, next) {
    const { id } = req.params
    if (!_uuid.validate.call(void 0, id)) {
      return res.status(400).json({ error: 'Invalid ID' })
    }
    try {
      const user = await _User2.default.findById(id)
      console.log(user)

      res.user = user
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
    next()
  }
}

exports. default = new UserMiddleware()
