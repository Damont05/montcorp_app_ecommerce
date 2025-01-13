import ProductCardPresentation from "./ProductCardPresentation.jsx";

const ProductCardLogic = ({
  id,
  sale,
  imgUrl,
  product,
  description,
  price,
  desc,
}) => {
  let data = { id, sale, imgUrl, product, description, price, desc };
  return <ProductCardPresentation data={data} />;
};

export default ProductCardLogic;
