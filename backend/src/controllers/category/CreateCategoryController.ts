import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body; // pega o name que esta sendo passado pelo corpo da requisição 

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute({name});

    return res.json(category);
  }
}

export { CreateCategoryController };
