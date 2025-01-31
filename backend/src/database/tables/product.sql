/*Tabla de Productos 'products'
	Descripcion: Almacena información sobre los productos.
	Campos:
		id: Identificador único del producto.
		name: Nombre del producto.
		description: Descripción del producto.
		price: Precio de venta.
		costPrice: Precio de costo.
		discount: Descuento aplicado.
		active: Estado del producto (activo o no).
		ratingsAverage y ratingsCount: Promedio y conteo de valoraciones.
		supplierId: Relación con el proveedor.
*/
CREATE TABLE products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    costPrice DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(5, 2) DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    ratingsAverage DECIMAL(3, 2) DEFAULT 0,
    ratingsCount INT DEFAULT 0,
    registrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastUpdateDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    supplierId VARCHAR(50),
    FOREIGN KEY (supplierId) REFERENCES suppliers(id)
);