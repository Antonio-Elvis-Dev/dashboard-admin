import  { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export default function ListItens({ orderId }) {
  const { ordersDetail} = useState(AuthContext);

  console.log(orderId)
  useEffect(() => {
    
  });

 
  const teste = [
    { nome: "teste", id: 2 },
    { nome: "teste", id: 3 },
    { nome: "teste", id: 4 },
    { nome: "teste", id: 5 },
    { nome: "teste", id: 6 },
    { nome: "teste", id: 7 },
  ];

  return (
    <div>
        <button >Teste</button>
      {teste
        ? teste.map((item, index) => (
            <p key={index}>teste</p>
          ))
        : "null"}
    </div>
  );
}
