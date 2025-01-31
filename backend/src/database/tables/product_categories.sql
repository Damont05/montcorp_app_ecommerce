/*Tabla intermedia para productos y categorías 'product_categories'
	Descripcion: Tabla intermedia para establecer una relación muchos a muchos entre productos y categorías
*/
CREATE TABLE product_categories (
    productId VARCHAR(50),
    categoryId INT,
    PRIMARY KEY (productId, categoryId),
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (categoryId) REFERENCES categories(id)
);