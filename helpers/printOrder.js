const { ConectorPluginV3 } = require("../conectorPluginv3");
const { format } = require("./currency");
const printOrder = async (order) => {
  const nombreImpresora = "ImpresoraTermica"; // Puede ser obtenida de la lista de impresoras o puedes escribirlo si lo conoces
  console.log("entre");

  //   const order = JSON.parse(order);
  console.log({ order });
  //   const conector = new ConectorPluginV3();
  //   const respuesta = await conector
  //     .Iniciar()
  //     .EstablecerTamañoFuente(2, 2)
  //     .EstablecerEnfatizado(true)
  //     .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
  //     .EscribirTexto("Sushi Panko\n")
  //     .Feed(2);

  //   // datos cliente
  //   conector
  //     .EstablecerEnfatizado(false)
  //     .EstablecerTamañoFuente(1, 1)
  //     .EstablecerAlineacion(ConectorPluginV3.ALINEACION_IZQUIERDA)
  //     .TextoSegunPaginaDeCodigos(
  //       2,
  //       "cp850",
  //       `Cliente: ${order.shippingAddress.username}\n`
  //     )
  //     .TextoSegunPaginaDeCodigos(
  //       2,
  //       "cp850",
  //       `Dirección: ${order.shippingAddress.address}\n`
  //     )
  //     .Feed(1);
  //   order.orderItems.forEach((item, i) => {
  //     conector
  //       .EstablecerEnfatizado(false)
  //       .EstablecerAlineacion(ConectorPluginV3.ALINEACION_IZQUIERDA)
  //       .EscribirTexto(`${item.quantity} ${item.name}\n`);
  //     if (item.name === "Roll personalizado") {
  //       // imprimir ingredientes
  //       // envoltura
  //       conector
  //         .EstablecerAlineacion(ConectorPluginV3.ALINEACION_IZQUIERDA)
  //         .EstablecerEnfatizado(true)
  //         .EscribirTexto(" -Envoltura: ");
  //       item.envelopes &&
  //         item.envelopes.map((i) => {
  //           conector
  //             .EstablecerEnfatizado(false)
  //             .TextoSegunPaginaDeCodigos(2, "cp850", `${i.name}\n`);
  //         });
  //       // relleno
  //       conector
  //         .EstablecerEnfatizado(true)
  //         .TextoSegunPaginaDeCodigos(2, "cp850", " -Relleno: ");
  //       if (item.proteins && item.vegetables) {
  //         const stringRelleno = [
  //           ...(item.proteins ?? []),
  //           ...(item.vegetables ?? []),
  //         ]
  //           .map((i) => `${i.qty} ${i.name}`)
  //           .join("-");
  //         conector
  //           .EstablecerEnfatizado(false)
  //           .TextoSegunPaginaDeCodigos(2, "cp850", `${stringRelleno}\n`);
  //       }
  //       // extras
  //       if (item?.extraProduct) {
  //         conector
  //           .EstablecerEnfatizado(true)
  //           .TextoSegunPaginaDeCodigos(2, "cp850", " -Extras: ");
  //         const stringExtras = item.extraProduct
  //           .map((i) => `${i.qty} ${i.name}`)
  //           .join("-");
  //         conector
  //           .EstablecerEnfatizado(false)
  //           .TextoSegunPaginaDeCodigos(2, "cp850", `${stringExtras}\n`);
  //       }
  //     }
  //     // Salsas
  //     conector.EstablecerEnfatizado(true).EscribirTexto(" -Salsas: ");
  //     if (item.sauces) {
  //       const stringRelleno = item.sauces
  //         .map((i) => `${i.qty} ${i?.name}`)
  //         .join("-");
  //       conector
  //         .EstablecerEnfatizado(false)
  //         .TextoSegunPaginaDeCodigos(2, "cp850", `${stringRelleno}\n`);
  //     }
  //     if (item.note) {
  //       // notas
  //       conector
  //         .EstablecerEnfatizado(true)
  //         .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
  //         .TextoSegunPaginaDeCodigos(2, "cp850", `*${item?.note}*\n`);
  //     }
  //     conector.Feed(1);
  //   });

  //   // productos extras
  //   if (order?.orderExtraItems.length > 0) {
  //     conector
  //       .EstablecerEnfatizado(false)
  //       .EstablecerAlineacion(ConectorPluginV3.ALINEACION_IZQUIERDA)
  //       .EscribirTexto(`Productos extra: \n`);
  //     order?.orderExtraItems?.map((ei) => {
  //       conector.TextoSegunPaginaDeCodigos(
  //         2,
  //         "cp850",
  //         ` ${ei.quantity} ${ei.name}\n`
  //       );
  //     });
  //   }
  //   conector.Feed(1);

  //   // total
  //   conector
  //     .EstablecerAlineacion(ConectorPluginV3.ALINEACION_DERECHA)
  //     .EstablecerEnfatizado(true)
  //     .EscribirTexto("----------------------------\n")
  //     .EscribirTexto(`Total:${format(Math.round(order.total))}`)
  //     .Feed(3)
  //     .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
  //     .EscribirTexto("***Gracias por su compra***\n")
  //     .Feed(1)
  //     .EstablecerEnfatizado(false)
  //     .EstablecerAlineacion(ConectorPluginV3.ALINEACION_DERECHA)
  //     .TextoSegunPaginaDeCodigos(2, "cp850", `N° ${order._id.slice(-10)}`)
  //     .Feed(1)
  //     // .Corte()
  //     // .CorteParcial()
  //     // .Pulso(120)
  //     .imprimirEn(nombreImpresora);
  if (respuesta) {
    console.log("Impreso correctamente", JSON.stringify(respuesta));
  } else {
    console.log("Error: " + JSON.stringify(respuesta));
  }
};

module.exports = { printOrder };
