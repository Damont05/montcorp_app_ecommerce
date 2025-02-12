/*Tabla de Usuarios 'user'
	Descripcion: Almacena información sobre los usuarios.
	Campos:
		id_user: Identificador único del usuario.
		name: Nombre del usuario.
		lastname: Apellido del usuario.
		email: Correo electronico del usuario.
		phone: Numero de telefono del usuario.
		address: Dirección del usuario(importante para los despachos).
		password: Contraseña del usuario en la app.
*/
CREATE TABLE user (
    id_user INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    address VARCHAR(255),
    password VARCHAR(255) NOT NULL
);