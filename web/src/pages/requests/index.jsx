import React, { useContext, useState } from "react";
import SidebarMenu from "../../components/sidebarMenu";
import ModalNewProduct from "../../components/modal/modalNewProduct";
import ModalNewRequest from "../../components/modal/modalNewRequest";
import { ImBin } from "react-icons/im";
import { AuthContext } from "../../contexts/auth";
import { PiNotePencil, PiTrash } from "react-icons/pi";

export default function Requests() {
  const [openModal, setOpenModal] = useState(false);
  const { listOrders, orders, products, searchProducts } =
    useContext(AuthContext);

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  function handleListOrders() {
    listOrders();
    searchProducts();
  }

  function handleListTotal(id) {
   orders.forEach(order => {
    order.items.forEach(item=>{
      if(id == item.order_id){
        console.log(item.product_id)
      }
    })
   })
  }

  async function handleDetailOrder(id){
    console.log(id)
  }
  return (
    <div className="flex bg-zinc-300">
      <SidebarMenu />
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 ">
        <form
          noValidate=""
          action=""
          className=" flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-lg">Pedidos</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="codigo" className="text-lg">
                  Código
                </label>
                <input
                  id="codigo"
                  type="number"
                  placeholder="ex: 56887"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className=" flex justify-around col-span-full  items-center ">
                <button
                  type="button"
                  className="w-1/3 rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50 text-lg hover:bg-violet-600 transition duration-500"
                  onClick={handleListOrders}
                >
                  Buscar
                </button>
                <button
                  type="button"
                  className="w-1/3 rounded-md dark:border-gray-700 bg-green-700 p-2 text-zinc-50 text-lg hover:bg-green-500 transition duration-500"
                  onClick={handleOpenModal}
                >
                  Novo Pedido
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        <div className=" pt-6 shadow rounded-md ">
          <div className="px-4">
            <h2 className="text-lg font-bold leading-6  text-gray-900">
              Mesas Abertas
            </h2>
          </div>
          <div className="mt-6">
            <table className=" w-full  divide-y divide-x divide-gray-200	">
              <thead className="bg-gray-200">
                <tr className="">
                  <th className="px-6 py-3 text-lef text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th className="px-6 py-3 text-lef text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Mesa
                  </th>
                  <th className="px-6 py-3 text-lef text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                 
                  <th className="px-6 py-3 text-lef text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-lef text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders
                  ? orders.map((item, index) => (
                      <tr className="cursor-pointer" key={index}  onClick={()=>handleDetailOrder(item.id)}  >
                        <td className=" px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                          {index}
                        </td>
                        <td className=" px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {item?.table}
                        </td>
                        <td className=" px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {item?.name}
                        </td>
                        
                        <td className=" px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {item?.status == true ? "Conluído" : "Não concluído"}
                        </td>
                        <td className=" px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap flex flex-row">
                          <button type="button">
                            <PiNotePencil size={26} />
                          </button>
                          <button type="button" onClick={()=>{}}>
                            <PiTrash size={26} />
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
        <ModalNewRequest
          isOpen={openModal}
          setOpenModal={() => setOpenModal(!openModal)}
        />
      </section>
    </div>
  );
}
