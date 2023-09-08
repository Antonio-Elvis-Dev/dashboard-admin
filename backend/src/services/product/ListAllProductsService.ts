import { ReactNode } from 'react';
import prismaClient from "../../prisma";

class ListAllProductsService {
  async execute() {

    const findManyProducts = await prismaClient.product.findMany()

    return findManyProducts
  }
}

export { ListAllProductsService };
