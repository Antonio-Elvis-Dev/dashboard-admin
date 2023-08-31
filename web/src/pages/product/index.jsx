import React from "react";
import SidebarMenu from "../../components/sidebarMenu";

export default function Product() {
  return (
    <div className="flex w-full">
      <SidebarMenu />
      <div className="flex flex-col w-full">
        <h2>Produtos</h2>
        <form action="" className="w-full max-w-lg bg-fuchsia-950">
          <div className="flex flex-wrap -mx-3 mb-6 bg-zinc-950">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 bg-zinc-700"><input
                className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                type="text"
                placeholder="Search"
              /></div>
          </div>
        </form>
      </div>
    </div>
  );
}
