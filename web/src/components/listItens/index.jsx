import  { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export default function ListItens() {
  const { orderDetail} = useState(AuthContext);

 

  return (
    <div>
      {orderDetail
        ? orderDetail.map((item, index) => (
            <p key={index}>teste</p>
          ))
        : "null"}
    </div>
  );
}
