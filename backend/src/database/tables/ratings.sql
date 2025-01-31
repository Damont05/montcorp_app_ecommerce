
/*Tabla de Valoraciones 'ratings'
	Descripcion: Almacena valoraciones realizadas por los usuarios sobre los productos.
	Campos:	
		productId: Relación con el producto valorado.
		userId: ID del usuario que realizó la valoración.
		rating: Valoración numérica entre 1 y 5.
		comment: Comentario sobre la valoración.
*/
CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productId VARCHAR(50),
    userId VARCHAR(50),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    registrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (productId) REFERENCES products(id)
);