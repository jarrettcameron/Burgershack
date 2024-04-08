import { dbContext } from "../db/DbContext.js"

class BurgersService {
    constructor() {

    }

    async updateBurger(id, data) {
        await dbContext.Burgers.findByIdAndUpdate(id, data)
        let burger = await dbContext.Burgers.findById(id)
        return burger
    }

    async deleteBurger(burgerId) {
        const burger = await dbContext.Burgers.findById(burgerId)
        if (!burger) throw new Error('Could not find burger.')

        await dbContext.Burgers.deleteOne({ _id: burgerId })
    }

    async postBurger(data) {
        const burger = await dbContext.Burgers.create(data)
        return burger
    }

    async getBurgers() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }
}

export const burgersService = new BurgersService()