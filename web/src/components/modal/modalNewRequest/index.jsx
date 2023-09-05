import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
export default function ModalNewRequest({ isOpen,setOpenModal }) {
  if (isOpen) {
    return (
      <div
        className=" flex items-center justify-center  text-zinc-50 fixed bottom-0 left-0 top-0 right-0  bg-black bg-opacity-60"
        style={{ zIndex: 1000 }}
      >
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-zinc-500 rounded-xl">
        <div className="flex flex-row justify-end p-3 " >
            <button type="button" onClick={setOpenModal} className="hover:bg-zinc-700 rounded-sm"> <AiFillCloseSquare size={30} /></button>
          </div>
          <form
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-bold text-lg">Abrir Mesa</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="codigo" className="text-lg">
                    Nº da Mesa
                  </label>
                  <input
                    id="codigo"
                    type="number"
                    placeholder="ex: 1"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>

                <div className="col-span-full  items-center justify-center">
                  <button className="w-full rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50 text-lg">
                    Abrir Mesa
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
          <form
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-bold text-lg">Adicionar Item</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="codigo" className="text-lg">
                    Nº da Mesa
                  </label>
                  <input
                    id="codigo"
                    type="number"
                    placeholder="ex: 1"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="name" className="text-lg">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="nome"
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>

                <div className=" flex col-span-6  items-center justify-center">
                  <button className="w-1/4 rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50 py-3 text-lg">
                    Adicionar Item
                  </button>
                  <button className="w-1/2 rounded-md dark:border-gray-700 bg-green-600 p-2 text-zinc-50 ml-3 py-3 text-lg">
                    Finalizar Pedido
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
  return null;
}
