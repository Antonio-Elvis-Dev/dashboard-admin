import { ListAllProductsService } from "../../services/product/ListAllProductsService";

import { Request, Response } from "express";

class ListAllProductsController {
  async handle(req: Request, res: Response) {
    
    const listAllProducts = new ListAllProductsService();
    const products = await listAllProducts.execute();
    return res.json(products);

  }
}

export { ListAllProductsController };
