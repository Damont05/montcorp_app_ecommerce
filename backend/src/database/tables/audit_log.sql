/*Tabla de Auditoria  'audit_log'
	Descripcion: Almacena los cambios realizados en las tablas de productos
	Campos:		
		id: Identificador único de la auditoria.
		user_admin: Usuario admin que realiza el cambio.
        table_name: Tablas afectadas por el cambio.
        operation: Tipo de operación realizada (INSERT, UPDATE, DELETE).
        description: descripcion de la operacion. 
        created_at: Fecha y hora de la operación.    
*/
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_admin VARCHAR(50) NOT NULL,
    table_name VARCHAR(50) NOT NULL,
    operation VARCHAR(25) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);