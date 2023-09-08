import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
class CreateUserController {
  //TODO responsavel por paegar os dados da requisição
  async handle(req: Request, res: Response) {
    // console.log(req.body) // TODO retorna tudo que é enviado para a api

    const { name, email, password } = req.body; // recebe os dados passados na requisição
    const createUserService =  new CreateUserService(); // chama o serviço que cria o usuário
    const user = await createUserService.execute({name,email,password}); // espera receber os items passados no createUserService

    return res.json(user);
  }
}

export { CreateUserController };
