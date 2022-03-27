import User from '../schemas/User'
import { Request, Response, NextFunction } from 'express'
import { validate as isUuid } from 'uuid'

interface resUser extends Response{
  user: {
    _id: string;
    email?: string,
    firstName?: string,
  }
}

class UserMiddleware {
  public async validateId (req:Request, res:resUser, next:NextFunction):Promise<resUser> {
    const { id } = req.params
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid ID' })
    }
    try {
      const user = await User.findById(id)
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

export default new UserMiddleware()
