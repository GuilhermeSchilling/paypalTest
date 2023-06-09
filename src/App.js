import { useState } from "react";
import Formulario from "./componentes/Formulario";
import OrderConfirm from "./componentes/OrderConfirm";

export default function App() {
const [orders, setOrders] = useState ([])
const newOrderAdd = (order) => {
console.log(order)
setOrders([...orders, order])
}
  return (
    <main>
      <Formulario orderCreate={order => newOrderAdd(order)}/>
      <OrderConfirm orders={orders} orderName="Order"/>
    </main>
  );
}


