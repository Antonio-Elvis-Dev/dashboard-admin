import prismaClient from "../../prisma";

interface OrderResquest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderResquest) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return order;
  }
}

export { RemoveOrderService };
