/*Tabla de Categorías 'categories'
	Descripcion: Almacena categorías para los productos.
	Campos:		
		id: Identificador único de la categoría.
		name: Nombre de la categoría.
*/
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);