DELIMITER //

CREATE TRIGGER afterProductInsert
AFTER INSERT ON product
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (user_admin, table_name, operation, description)
    VALUES (USER(), 'product', 'INSERT', CONCAT('Se insertó el producto: ', NEW.name));
END;

//

DELIMITER ;

