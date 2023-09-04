import React, { useState } from "react";
import SidebarMenu from "../../components/sidebarMenu";

export default function Product() {

  const [openModal, setOpenModal] = useState(false)


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
              <p className="font-medium">Novo Produto</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="codigo" className="text-sm">
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
                <button className="w-1/3 rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50">
                  Buscar
                </button>
                <button className="w-1/3 rounded-md dark:border-gray-700 bg-green-700 p-2 text-zinc-50">
                  Novo Produto
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      <div className="flex flex-col ">Lista</div>
      </section>
      
    </div>
  );
}
