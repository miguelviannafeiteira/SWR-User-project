import User from '../schemas/User'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
// eslint-disable-next-line no-unused-vars
// import UserMiddleware from '../middlewares/UserMiddleware'

class UserController {
  async index (req:Request, res:Response):Promise<Response> {
    try {
      const users = await User.find()
      return res.status(200).json({ users })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  async store (req:Request, res:Response):Promise<Response> {
    const { firstName, email } = req.body

    if (!firstName || !email) {
      return res.status(400).json({ error: 'Missing firstName or email.' })
    }

    const user = new User({
      _id: uuid(),
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

  async indexUser (req:Request, res):Promise<Response> {
    try {
      const user = await res.user
      return res.status(200).json({ user })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  async update (req:Request, res) {
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

  async delete (req:Request, res):Promise<Response> {
    try {
      await res.user.remove()
      return res.status(200).json(res.user)
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }
}

export default new UserController()
