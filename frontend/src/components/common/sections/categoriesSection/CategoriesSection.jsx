import styles from "./CategoriesSection.module.css";
const CategoriesSection = () => {
  return (
    <>
      <section className={`${styles.section_categorias}`}>
        {/* <!-- Contenedor de categorias --> */}
        <div className={`${styles.cards_categorias}`}>
          {/* <!-- Categoria hombre --> */}
          <div className={`${styles.card}`}>
            <a href="">
              <div className={`${styles.img-content}`}>
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712541056/proyects/vector/categoria-hombre_y1lfce.jpg"
                  alt=""
                ></img>
              </div>
              <h2 className={`${styles.titulo_card}`}>Hombre</h2>
            </a>
          </div>
          {/*  <!-- Categoria mujer --> */}
          <div className={`${styles.card}`}>
            <a href="">
              <div className={`${styles.img-content}`}>
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712541057/proyects/vector/categoria-mujer_en1oqj.jpg"
                  alt=""
                ></img>
              </div>
              <h2 className={`${styles.titulo_card}`}>Mujer</h2>
            </a>
          </div>
          {/* <!-- Categoria Niños --> */}
          <div className={`${styles.list_products}`}"card">
            <a href="">
              <div className={`${styles.img-content}`}>
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712541061/proyects/vector/categoria-ni%C3%B1o_erw8ba.jpg"
                  alt=""
                ></img>
              </div>
              <h2 className={`${styles.titulo_card}`}>Niño y niña</h2>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
