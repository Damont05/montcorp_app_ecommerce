import ProductCardLogic from "../products/productCard/ProductCardLogic";
import "./Favorites.module.css";


const FavoritesPresentation = () => {
  return (
    <>
      <div className="list_favorites">
        <h3>Mi Colección Personalizada</h3>
        <div container spacing={2} columns={16} className="content_favorites">
          <div item lg={3}>
            <ProductCardLogic
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCardLogic
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCardLogic
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCardLogic
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCardLogic
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCardLogic
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesPresentation;
