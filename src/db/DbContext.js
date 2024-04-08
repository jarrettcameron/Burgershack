import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BurgerSchema } from '../models/Burger.js'

class DbContext {
  Burgers = mongoose.model('burger', BurgerSchema)
}

export const dbContext = new DbContext()
