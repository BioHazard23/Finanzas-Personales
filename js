// ===========================================
// Gestión de Datos con Objetos, Sets y Maps
// Módulo 3 - Semana 2
// ===========================================
// Autor: Juan Manuel Arango Arana
// Descripción: Este programa almacena y gestiona
// productos usando objetos, Sets y Maps.
// ===========================================

// Paso 1: Crear un objeto con 3 productos
// Cada producto tiene un ID, un nombre y un precio

const productos = {
    producto1: {
        id: 101,
        nombre: "Laptop Gamer",
        precio: 4500
    },
    producto2: {
        id: 102,
        nombre: "Mouse Inalámbrico",
        precio: 120
    },
    producto3: {
        id: 103,
        nombre: "Teclado Mecánico",
        precio: 300
    }
};

// Mostramos los productos en consola
console.log("========== LISTA DE PRODUCTOS (OBJETO) ==========");
console.log(productos);

// Paso 2: Convertir el objeto a un Set
// Esto lo hacemos para evitar duplicados y trabajar con elementos únicos

// Creamos un nuevo Set vacío
const productosSet = new Set();

// Recorremos el objeto y agregamos cada producto como cadena JSON al Set
const listaProductos = Object.values(productos); // Convertimos el objeto en un array

listaProductos.forEach(producto => {
    // Convertimos el producto a texto para poder guardarlo en el Set
    const productoTexto = JSON.stringify(producto);
    productosSet.add(productoTexto); // Agregamos al Set
});

// Mostramos los productos únicos
console.log("\n========== PRODUCTOS ÚNICOS (SET) ==========");
for (const item of productosSet) {
    const producto = JSON.parse(item); // Convertimos de nuevo a objeto
    console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: $${producto.precio}`);
}

// Paso 3: Crear un Map con categoría como clave y nombre del producto como valor

const productosMap = new Map();

// Usamos el método .set() para agregar pares clave-valor
productosMap.set("Computadores", "Laptop Gamer");
productosMap.set("Accesorios", "Mouse Inalámbrico");
productosMap.set("Periféricos", "Teclado Mecánico");

// Mostramos las categorías y productos
console.log("\n========== CATEGORÍAS Y PRODUCTOS (MAP) ==========");
productosMap.forEach((nombre, categoria) => {
    console.log(`Categoría: ${categoria} -> Producto: ${nombre}`);
});

// Paso 4: Recorrer estructuras de datos

// 4.1 Recorrer el objeto productos usando for...in
console.log("\n========== RECORRIDO DEL OBJETO CON for...in ==========");
for (const clave in productos) {
    const p = productos[clave];
    console.log(`Clave: ${clave}`);
    console.log(`  ID: ${p.id}`);
    console.log(`  Nombre: ${p.nombre}`);
    console.log(`  Precio: $${p.precio}`);
}

// 4.2 Recorrer el Set usando for...of
console.log("\n========== RECORRIDO DEL SET CON for...of ==========");
for (const elemento of productosSet) {
    const p = JSON.parse(elemento);
    console.log(`ID: ${p.id} | Nombre: ${p.nombre} | Precio: $${p.precio}`);
}

// 4.3 Recorrer el Map usando forEach()
console.log("\n========== RECORRIDO DEL MAP CON forEach ==========");
productosMap.forEach((producto, categoria) => {
    console.log(`La categoría "${categoria}" contiene el producto "${producto}".`);
});

// Paso 5: Validaciones

console.log("\n========== VALIDACIÓN DE DATOS ==========");

// Validamos que cada producto tenga id, nombre y precio
let datosValidos = true;

listaProductos.forEach(producto => {
    if (
        typeof producto.id !== 'number' ||
        typeof producto.nombre !== 'string' ||
        typeof producto.precio !== 'number'
    ) {
        datosValidos = false;
    }
});

if (datosValidos) {
    console.log("✅ Todos los productos tienen datos válidos.");
} else {
    console.log("❌ Hay productos con datos incompletos o incorrectos.");
}

// También mostramos las claves, valores y entradas del objeto productos
console.log("\n========== TRABAJANDO CON OBJECT KEYS/VALUES/ENTRIES ==========");

console.log("🔑 Claves del objeto productos:");
console.log(Object.keys(productos));

console.log("\n📦 Valores del objeto productos:");
console.log(Object.values(productos));

console.log("\n🧩 Entradas del objeto productos (pares clave-valor):");
console.log(Object.entries(productos));

// Mensaje final
console.log("\n✅ PROGRAMA FINALIZADO CORRECTAMENTE. TODOS LOS DATOS SE MOSTRARON Y VALIDARON.");