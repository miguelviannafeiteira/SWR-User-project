"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

var _uuid = require('uuid');
// eslint-disable-next-line no-unused-vars


class UserController {
  async index (req, res) {
    try {
      const users = await _User2.default.find()
      return res.status(200).json({ users })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  async store (req, res) {
    const { firstName, email } = req.body

    if (!firstName || !email) {
      return res.status(400).json({ error: 'Missing firstName or email.' })
    }

    const user = new (0, _User2.default)({
      _id: _uuid.v4.call(void 0, ),
      email,
      firstName
    })

    try {
      await user.save()

      return res.status(201).json(user)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async update (req, res) {
    const { firstName, email } = req.body

    if (firstName) res.user.firstName = firstName
    if (email) res.user.email = email

    try {
      await res.user.save()
      return res.status(200).json(res.user)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  async delete (req, res) {
    try {
      await res.user.remove()
      return res.status(200).json(res.user)
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }
}

exports. default = new UserController()
