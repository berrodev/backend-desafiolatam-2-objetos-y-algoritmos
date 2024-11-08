// 1. Crear las estructuras de datos necesarias utilizando objetos JSON para representar productos, ventas y clientes.
const { productos, ventas, clientes } = {
  "productos": [
    {
      "id": 1,
      "nombre": "Laptop",
      "precio": 1200000,
      "categoria": "Electronica",
      "stock": 50,
    },
    {
      "id": 2,
      "nombre": "Mouse",
      "precio": 25000,
      "categoria": "Accesorios",
      "stock": 200,
    },
    {
      "id": 3,
      "nombre": "Teclado",
      "precio": 45000,
      "categoria": "Accesorios",
      "stock": 150,
    },
    {
      "id": 4,
      "nombre": "Monitor",
      "precio": 300000,
      "categoria": "Electronica",
      "stock": 80,
    },
    {
      "id": 5,
      "nombre": "Silla Gamer",
      "precio": 250000,
      "categoria": "Muebles",
      "stock": 40,
    },
    {
      "id": 6,
      "nombre": "Escritorio",
      "precio": 150000,
      "categoria": "Muebles",
      "stock": 15,
    },
    {
      "id": 7,
      "nombre": "Impresora",
      "precio": 200000,
      "categoria": "Oficina",
      "stock": 1,
    },
    {
      "id": 8,
      "nombre": "Auriculares",
      "precio": 75000,
      "categoria": "Accesorios",
      "stock": 120,
    },
    {
      "id": 9,
      "nombre": "Webcam",
      "precio": 90000,
      "categoria": "Accesorios",
      "stock": 70,
    },
    {
      "id": 10,
      "nombre": "Tablet",
      "precio": 400000,
      "categoria": "Electronica",
      "stock": 45,
    },
  ],
  "ventas": [
    {
      "idVenta": 1,
      "idProducto": 1,
      "cantidad": 1,
      "fecha": "2024-01-10",
      "idCliente": 1,
    },
    {
      "idVenta": 2,
      "idProducto": 1,
      "cantidad": 1,
      "fecha": "2024-01-12",
      "idCliente": 2,
    },
    {
      "idVenta": 3,
      "idProducto": 4,
      "cantidad": 3,
      "fecha": "2024-02-05",
      "idCliente": 3,
    },
    {
      "idVenta": 4,
      "idProducto": 4,
      "cantidad": 2,
      "fecha": "2024-02-20",
      "idCliente": 4,
    },
    {
      "idVenta": 5,
      "idProducto": 6,
      "cantidad": 7,
      "fecha": "2024-03-15",
      "idCliente": 5,
    },
    {
      "idVenta": 6,
      "idProducto": 7,
      "cantidad": 1,
      "fecha": "2024-03-30",
      "idCliente": 6,
    },
    {
      "idVenta": 7,
      "idProducto": 5,
      "cantidad": 2,
      "fecha": "2024-04-10",
      "idCliente": 7,
    },
    {
      "idVenta": 8,
      "idProducto": 8,
      "cantidad": 5,
      "fecha": "2024-04-25",
      "idCliente": 8,
    },
    {
      "idVenta": 9,
      "idProducto": 9,
      "cantidad": 8,
      "fecha": "2024-05-05",
      "idCliente": 9,
    },
    {
      "idVenta": 10,
      "idProducto": 10,
      "cantidad": 3,
      "fecha": "2024-05-20",
      "idCliente": 10,
    },
  ],
  "clientes": [
    {
      "idCliente": 1,
      "nombre": "El Chavo",
      "email": "elchavo@email.com",
    },
    {
      "idCliente": 2,
      "nombre": "La Chilindrina",
      "email": "chilindrina@email.com",
    },
    {
      "idCliente": 3,
      "nombre": "Don Ramón",
      "email": "donramon@email.com",
    },
    {
      "idCliente": 4,
      "nombre": "Quico",
      "email": "quico@email.com",
    },
    {
      "idCliente": 5,
      "nombre": "Doña Florinda",
      "email": "dona.florinda@email.com",
    },
    {
      "idCliente": 6,
      "nombre": "Profesor Jirafales",
      "email": "profesor.jirafales@email.com",
    },
    {
      "idCliente": 7,
      "nombre": "Señor Barriga",
      "email": "sr.barriga@email.com",
    },
    {
      "idCliente": 8,
      "nombre": "Godínez",
      "email": "godinez@email.com",
    },
    {
      "idCliente": 9,
      "nombre": "Ñoño",
      "email": "nono@email.com",
    },
    {
      "idCliente": 10,
      "nombre": "Doña Clotilde",
      "email": "dona.clotilde@email.com",
    },
  ],
};

// 2. Implementar una función que encuentre los 3 productos más vendidos.
const tresProductosMasVendidos = (productos, ventas) => {
  // Encontrar la cantidad total de ventas por producto y guardarlos en un objeto
  const ventasPorProducto = ventas.reduce((acc, venta) => {
    acc[venta.idProducto] = (acc[venta.idProducto] || 0) + venta.cantidad;
    return acc;
  }, {});

  // Generar un array que contenga los productos y la cantidad de ventas (map)
  const productosVentas = productos.map((producto) => ({
    ...producto,
    cantidadVentas: ventasPorProducto[producto.id] || 0,
  }));

  // Ordenar (sort) y extraer (slice) los 3 productos mas vendidos
  const topProductosVentas = productosVentas
    .sort((a, b) => b.cantidadVentas - a.cantidadVentas)
    .slice(0, 3);
  // Se retorna el array
  return topProductosVentas;
};

// 3. Crear una función que calcule el total de ingresos por categoría de producto.
const totalIngresosCategorias = (productos, ventas) => {
  return ventas.reduce((ingresosPorCategoria, venta) => {
    // Encontrar la cantidad total de ventas por categorias
    const producto = productos.find((p) => p.id === venta.idProducto);

    if (producto) {
      // Calculamos el ingreso de la venta actual (precio*cantidad)
      const ingreso = producto.precio * venta.cantidad;
      const categoria = producto.categoria;

      // Sumar el ingreso en la categoría
      ingresosPorCategoria[categoria] =
        (ingresosPorCategoria[categoria] || 0) + ingreso;
    }

    return ingresosPorCategoria;
  }, {});
};

// 4. Implementar una función que identifique a los clientes "VIP" (aquellos que han gastado más de $1,000,000 en total).
function identificarClientesVIP(productos, ventas, clientes) {
  // Calcular el total gastado por cada cliente con reduce
  let totalGastoPorCliente = ventas.reduce((acc, venta) => {
    // Buscar el cliente correspondiente a la venta actual
    let cliente = clientes.find((c) => c.idCliente === venta.idCliente);
    // Buscar el producto correspondiente a la venta actual
    let producto = productos.find((p) => p.id === venta.idProducto);

    // Si el cliente y el producto existen, calcular el gasto de esa venta
    if (cliente && producto) {
      let gasto = producto.precio * venta.cantidad;
      if (!acc[cliente.idCliente]) {
        acc[cliente.idCliente] = 0;
      }
      acc[cliente.idCliente] += gasto;
    }
    // Devolver el acumulador con el total de gasto por cliente

    return acc;
  }, {});

  // Filtrar los clientes que han gastado más de $1.000.000
  return clientes
    .filter((cliente) => totalGastoPorCliente[cliente.idCliente] > 1000000)
    .map((cliente) => ({
      ...cliente,
      totalGasto: totalGastoPorCliente[cliente.idCliente],
    }));
}

// 5. Crear una función que genere un reporte de inventario.
function generarReporteInventario(productos) {
  return productos.map((producto) => {
    let status;
    // "Low Stock" si el stock es menor a 10 (stock < 10), "In Stock" si está entre 10 y 20 (10>=stock<=20), y "Enough Stock" si es mayor a 20 (stock>20)
    if (producto.stock < 10) {
      status = "Low Stock";
    } else if (producto.stock <= 20) {
      status = "In Stock";
    } else {
      status = "Enough Stock";
    }
    // Se devuelven los productos con algunas propiedades y el estado de stick
    return {
      nombre: producto.nombre,
      categoria: producto.categoria,
      stock: producto.stock,
      status: status,
    };
  });
}

// Mostrar resultados por consola
console.log("--------- 2 ---------");
console.log("Los 3 Productos mas vendidos son:");
console.log(tresProductosMasVendidos(productos, ventas));
console.log("--------- 3 ---------");
console.log("Total de ingresos por categoría de producto:");
console.log(totalIngresosCategorias(productos, ventas));
console.log("--------- 4 ---------");
console.log("Los clientes VIP son:");
console.log(identificarClientesVIP(productos, ventas, clientes));
console.log("--------- 5 ---------");
console.log("Reporte de inventario:");
console.log(generarReporteInventario(productos));
