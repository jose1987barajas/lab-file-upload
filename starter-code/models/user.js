const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema(
  {
    username: String,
    email: String,
    password: String,
    imgPath: String,
    imgName: String
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
