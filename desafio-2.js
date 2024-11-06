// 1. Crear las estructuras de datos necesarias utilizando objetos JSON para representar productos, ventas y clientes.
const { productos, ventas, clientes } = {
  "productos": [
    {
      "id": 1,
      "nombre": "Laptop",
      "precio": 1200000,
      "categoria": "Electrónica",
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
      "categoria": "Electrónica",
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
      "stock": 30,
    },
    {
      "id": 7,
      "nombre": "Impresora",
      "precio": 200000,
      "categoria": "Oficina",
      "stock": 60,
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
      "categoria": "Electrónica",
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
// Encontrar la cantidad total de ventas por producto
// Ordenar y extraer los 3 productos mas vendidos
// Mostrar la información de los productos

// 3. Crear una función que calcule el total de ingresos por categoría de producto.
// 4. Implementar una función que identifique a los clientes "VIP" (aquellos que han gastado más de $1,000,000 en total).
// 5. Crear una función que genere un reporte de inventario.
