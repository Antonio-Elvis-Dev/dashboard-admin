import React, { useState } from "react";
import SidebarMenu from "../../components/sidebarMenu";
import ModalNewProduct from "../../components/modal/modalNewProduct";
import ModalNewRequest from "../../components/modal/modalNewRequest";

export default function Requests() {
  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal(){

    setOpenModal( !openModal)
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
              <button type="button" className="w-1/3 rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50 text-lg hover:bg-violet-600 transition duration-500">
                Buscar
              </button>
              <button type="button" className="w-1/3 rounded-md dark:border-gray-700 bg-green-700 p-2 text-zinc-50 text-lg hover:bg-green-500 transition duration-500" onClick={handleOpenModal}>
                Novo Pedido
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    <div className="modal flex flex-col w-full ">Lista</div>
      <ModalNewRequest isOpen={openModal} setOpenModal={()=>setOpenModal(!openModal)}/>
    </section>
    
  </div>
  );
}
