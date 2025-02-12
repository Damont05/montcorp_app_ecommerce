/*Tabla de Inventario 'inventory'
	Descripcion: Almacena información sobre el inventario de cada producto.
	Campos:
		productId: Relación con el producto.
		color, size: Atributos del inventario.
		stock: Cantidad disponible en stock.
		minimumReplenishmentQuantity: Cantidad mínima para reabastecer.
*/
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productId VARCHAR(50),
    color VARCHAR(50),
    size VARCHAR(10),
    stock INT NOT NULL,
    sale INT DEFAULT 0,
    minimumReplenishmentQuantity INT NOT NULL,
    location VARCHAR(100),
    registrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastUpdateDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (productId) REFERENCES products(id)
);
