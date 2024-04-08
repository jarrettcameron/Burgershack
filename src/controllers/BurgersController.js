import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')

        this.router.get('', this.getBurgers)
        this.router.post('', this.postBurger)
        this.router.delete('/:burgerId', this.deleteBurger)
        this.router.put('/:burgerId', this.updateBurger)
    }

    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async postBurger(request, response, next) {
        try {
            const burger = await burgersService.postBurger(request.body)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(request, response, next) {
        try {
            await burgersService.deleteBurger(request.params.burgerId)
            response.send("Burger was removed.")
        } catch (error) {
            next(error)
        }
    }

    async updateBurger(request, response, next) {
        try {
            const burger = await burgersService.updateBurger(request.params.burgerId, request.body)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
}