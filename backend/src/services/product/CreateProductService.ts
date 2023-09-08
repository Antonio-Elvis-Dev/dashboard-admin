import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;

  category_id: string;
  codigoProd: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    category_id,
    codigoProd
  }: ProductRequest) {

    const existsProduct = await prismaClient.product.findFirst(
      {
        where: {
          codigoProd
        }
      }
    )
    if (existsProduct) {
      throw new Error("cóigo presente na base")
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        category_id,
        codigoProd
      },
    });
    return product;
  }
}

export { CreateProductService };
