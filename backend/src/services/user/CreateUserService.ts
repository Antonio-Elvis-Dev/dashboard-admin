import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  // vai retornar algo para o usuário
  async execute({ name, email, password }: UserRequest) {
    // verificar se enviou um email
    if (!email) {
      throw new Error("Email incorreto");
    }

    const userAlredyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlredyExists) {
      throw new Error("O usuário já existe!");
    }

    const passwordHash = await hash(password,8)
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password:passwordHash,
      },
      select: { // seleciona o que retornar ao usuário 
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
