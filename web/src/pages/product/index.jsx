import React, { useContext, useState } from "react";
import SidebarMenu from "../../components/sidebarMenu";
import ModalNewProduct from "../../components/modal/modalNewProduct";
import { AuthContext } from "../../contexts/auth";

export default function Product() {
  const [openModal, setOpenModal] = useState(false);

  const { searchProducts, products } = useContext(AuthContext);

  // const testeLista = [{"1","teste
console.log(products)
  const [teste, setTeste] = useState([
    { id: 1, cod: 1, nome: "teste", valor: "20,00" },
  ]);
  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  
  function handleSearchProduct(){
    searchProducts()
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
              <p className="font-bold text-lg">Produtos</p>
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
                  onClick={handleSearchProduct}
                  className="w-1/3 rounded-md dark:border-gray-700 bg-violet-900 p-2 text-zinc-50 text-lg hover:bg-violet-600 transition duration-500"
                >
                  Buscar
                </button>
                <button
                  type="button"
                  className="w-1/3 rounded-md dark:border-gray-700 bg-green-700 p-2 text-zinc-50 text-lg hover:bg-green-500 transition duration-500"
                  onClick={handleOpenModal}
                >
                  Novo Produto
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        <div className=" relative min-h-1 float-left pr-3 pl-3">
          <table className=" w-full  table-auto	">
            <thead>
              <tr className="">
                <th >Id</th>
                <th>Cód</th>
                <th>Nome</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr  key={index} className=" ">
                  <td>{index+1}</td>
                  <td>{item.codigoProd}</td>
                  <td>{item.name}</td>
                  <td>R${item.price}</td>
                </tr>
              ))}
              
             
            </tbody>
          </table>
        </div>
        <ModalNewProduct
          isOpen={openModal}
          setOpenModal={() => setOpenModal(!openModal)}
        />
      </section>
    </div>
  );
}
