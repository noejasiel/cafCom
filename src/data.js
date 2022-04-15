const pedido = [
  {
    id: 1,
    Link: "/Pedidos/1",
    name: "pedido1",
    persona: "juan",
    apellido: "silva",
    direccion: "Salon 1124 edificio 1",
    pedido: {
      idPedidio: 1,
      pedido: "torta, jugo, coca",
    },
    hora: 10,
  },
  {
    id: 2,
    Link: "/Pedidos/2",
    name: "pedido2",
    persona: "trufa",
    apellido: "silva",
    direccion: "Salon 2124 edificio 2",
    pedido: {
      idPedidio: 2,
      pedido: "torta, jugo, coca",
    },
    hora: 10,
  },
  {
    id: 3,
    Link: "/Pedidos/3",
    name: "pedido3",
    persona: "pedro",
    apellido: "silva",
    direccion: "Salon 2124 edificio 2",
    pedido: {
      idPedidio: 3,
      pedido: "torta, jugo, coca",
    },
    hora: 10,
  },
  {
    id: 4,
    Link: "/Pedidos/4",
    name: "pedido4",
    persona: "alin",
    apellido: "silva",
    direccion: "palapas IA",
    pedido: {
      idPedidio: 4,
      pedido: "torta, jugo, coca",
    },
    hora: 10,
  },
];

export const getUser = (id) => {
  return pedido.find((user) => user.id == id);
};

export default pedido;
