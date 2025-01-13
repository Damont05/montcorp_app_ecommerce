import styles from "./SizesProducts.module.css";

const SizesProductsPresentation = () => {
  return (
    <>
      <div className={styles.sizes}>
        {["U", "S", "M", "L", "XL", "XXL"].map((size) => (
          <div key={size} className={styles.size}>
            <input id={size} type="checkbox" />
            <label htmlFor={size}>{size}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default SizesProductsPresentation;
