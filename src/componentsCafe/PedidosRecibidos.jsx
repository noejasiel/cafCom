import { useState } from "react";

export const PedidosRecibidos = (PedidosRecibidos) => {
  const [pedidosEntregados, setPedidosEntregados] = useState([]);
  const [toggle, setToggle] = useState();

  console.log(PedidosRecibidos.pedidos[0]);
  setPedidosEntregados(PedidosRecibidos.pedidos[0]);

  return (
    <div>
      <h1>Pedidos</h1>
      <div onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <div>
            <h1 className="text-white">pedidos entregados</h1>
          </div>
        ) : (
          <div>
            <h1 className="text-white">Pedidos Entregados</h1>
          </div>
        )}
      </div>
    </div>
  );
};
