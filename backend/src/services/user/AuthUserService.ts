import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs"; // usado para compara senhas
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      //TODO validaçao de email e senha de usuário
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("User/password incorrect");
    }

    const passwordMatch = await compare(password, user.password); // compara a senha fornecida pelo usuário com a senha gerada na criação da conta

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    // se der certo gera o token para o usuário
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        // desativar o secret do tsconfig
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthUserService };
