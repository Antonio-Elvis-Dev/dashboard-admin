import React from "react";
import SidebarMenu from "../../components/sidebarMenu";

export default function Requests() {
  return (
    <div className="flex w-full ">
      <SidebarMenu />
      <div  className="flex w-full flex-col">
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
          <form
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Buscar Pedido</p>
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
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="name" className="text-sm">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="nome"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>

                <div className="col-span-full  items-center justify-center">
                  <button className="w-full rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50">
                    Buscar
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
        <div className="">
          lista
        </div>
      </div>
    </div>
  );
}
