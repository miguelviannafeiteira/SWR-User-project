import mongoose, { Document } from 'mongoose'

interface UserInterface extends Document{
  _id?: string,
  email?: string,
  firstName?: string,
}

const UserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  firstName: String
}, {
  timestamps: true
}
)

export default mongoose.model<UserInterface>('User', UserSchema)
