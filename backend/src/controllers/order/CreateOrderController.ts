import { CreateOrderService } from "../../services/order/CreateOrderService";
import { Request, Response } from "express";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { name, table } = req.body;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({
      name,
      table,
    });
    return res.json(order);

  }
}

export { CreateOrderController };
