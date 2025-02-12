
/*Tabla de Proveedores 'suppliers'
	Descripcion: Almacena información sobre los proveedores.
	Campos:
		id: Identificador único del proveedor.
		name: Nombre del proveedor.
*/
CREATE TABLE suppliers (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);