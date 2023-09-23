import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      // where: {
      //   draft: true,
      //   status: false,
      // },
      orderBy: {
        created_at: "desc",
      },
      include:{
        items:true,
        
      }
    });
    return orders;
  }
}

export { ListOrderService };
