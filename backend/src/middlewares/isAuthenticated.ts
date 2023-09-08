import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Receber o token do usuario que vai ser passado no cabeçalho da requisição
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // validação de token
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload; // por estarmos usando TS afirmamos que o dado devovido é o tipo Payload



    // o res.user_id = sub => espassa o id do usuario para dentro da variavel user_id do response

    req.user_id = sub; // em typescript não existe um tipo chando user_id, logo terá de ser criado manualmente.Erro gerado: A propriedade 'user_id' não existe no tipo 'Request" | 
// aolução criar um arquivo @types e criar o user_id dentro do Express

    return next(); // para prosseguir 
  } catch (error) {
    return res.status(401).end();
  }
  //   console.log(token);
}
