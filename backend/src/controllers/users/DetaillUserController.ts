import { Request, Response } from "express";

import { DetaillUserService } from "../../services/user/DetaillUserService";
class DetaillUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const detaillUserService = new DetaillUserService();

    const user = await detaillUserService.execute(user_id);

    return res.json(user);
  }
}

export { DetaillUserController };
