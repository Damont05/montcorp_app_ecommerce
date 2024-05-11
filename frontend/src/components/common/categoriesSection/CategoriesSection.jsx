import "./CategoriesSection.css";
const CategoriesSection = () => {
  return (
    <>
      <section className="section_categorias">
        {/* <!-- Contenedor de categorias --> */}
        <div className="cards_categorias">
          {/* <!-- Categoria hombre --> */}
          <div className="card">
            <a href="">
              <div className="img-content">
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712541056/proyects/vector/categoria-hombre_y1lfce.jpg"
                  alt=""
                ></img>
              </div>
              <h2 className="titulo_card">Hombre</h2>
            </a>
          </div>
          {/*  <!-- Categoria mujer --> */}
          <div className="card">
            <a href="">
              <div className="img-content">
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712541057/proyects/vector/categoria-mujer_en1oqj.jpg"
                  alt=""
                ></img>
              </div>
              <h2 className="titulo_card">Mujer</h2>
            </a>
          </div>
          {/* <!-- Categoria Niños --> */}
          <div className="card">
            <a href="">
              <div className="img-content">
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712541061/proyects/vector/categoria-ni%C3%B1o_erw8ba.jpg"
                  alt=""
                ></img>
              </div>
              <h2 className="titulo_card">Niño y niña</h2>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
