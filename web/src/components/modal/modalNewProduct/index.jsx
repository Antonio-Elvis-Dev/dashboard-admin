import React, { useContext, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { AuthContext } from "../../../contexts/auth";

export default function ModalNewProduct({ isOpen, setOpenModal, children }) {
  const { categories, createCategory, createProduct } = useContext(AuthContext);

  const [nomeCategory, setNomeCategory] = useState("");

  const [codProd, setCodProd] = useState("");
  const [nomeProd, setNomeProd] = useState("");
  const [valorProd, setValorProd] = useState("");
  const [categoryProd, setCategoryProd] = useState("");

  function handleCreateCategory() {
    createCategory(nomeCategory);

    setNomeCategory("");
  }
  function handleCreateProduct() {
    createProduct(codProd, nomeProd, valorProd, categoryProd);
    setCategoryProd("");
    setCodProd("");
    setNomeProd("");
    setValorProd("");
  }
  if (isOpen) {
    return (
      <div
        className=" flex items-center justify-center  text-zinc-50 fixed bottom-0 left-0 top-0 right-0 bg-black bg-opacity-60"
        style={{ zIndex: 1000 }}
      >
        <section className=" dark:bg-gray-800 dark:text-gray-50 bg-zinc-500 rounded-xl ">
          <div className="flex flex-row justify-end p-3 ">
            <button
              type="button"
              onClick={setOpenModal}
              className="hover:bg-zinc-700 rounded-sm"
            >
              <AiFillCloseSquare size={30} />
            </button>
          </div>
          <form
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-12 p-9"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className=" text-xl font-bold">Nova Categoria</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="name" className="text-lg">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="nome"
                    value={nomeCategory}
                    onChange={(e) => setNomeCategory(e.target.value)}
                    className="w-full rounded-md focus:ring text-zinc-950 focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>

                <div className="col-span-full  items-center justify-center">
                  <button
                    onClick={handleCreateCategory}
                    type="button"
                    className="w-full rounded-md dark:border-gray-700 bg-violet-900 p-2  text-lg text-zinc-50"
                  >
                    Criar
                  </button>
                </div>
              </div>
            </fieldset>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className=" text-xl font-bold">Novo Produto</p>
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
                    value={codProd}
                    onChange={(e) => setCodProd(e.target.value)}
                    className="w-full rounded-md text-zinc-950 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
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
                    value={nomeProd}
                    onChange={(e) => setNomeProd(e.target.value)}
                    className="w-full rounded-md focus:ring text-zinc-950 focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="category" className="text-lg">
                    Categoria:
                  </label>
                  <select
                    className="bg-neutral-700 rounded-lg"
                    value={categoryProd}
                    onChange={(e) => setCategoryProd(e.target.value)}
                  >
                    <option value="" selected>
                      Selecione Categoria
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category?.id}>
                        {category?.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="valor" className="text-lg">
                    Valor
                  </label>
                  <input
                    id="valor"
                    type="number"
                    placeholder="valor"
                    value={valorProd}
                    onChange={(e) => setValorProd(e.target.value)}
                    className="w-full rounded-md focus:ring focus:ri focus:ri text-zinc-950 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full  items-center justify-center">
                  <button
                    type="button"
                    onClick={handleCreateProduct}
                    className="w-full rounded-md dark:border-gray-700 bg-violet-900 p-2  text-lg text-zinc-50"
                  >
                    Cadastrar
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
