import { useNavigate } from "react-router-dom";
import "./Adding.scss";
import { useState } from "react";
import axios from "axios";

const Add = () => {
  const navigation = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    brand: "",
    stock: "",
    description: "",
    price: "",
    discountPercentage: "",
  });
  const closeBtn = () => {
    navigation("/");
  };

  const hendelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value.trim() });
  };

  const save = async () => {
    await axios.post("http://localhost:3000/products", product).then((res) => {
      closeBtn();
    });
  };

  return (
    <>
      <section className="add_product">
        <div className="container">
          <div className="add_product_item">
            <button className="head__btn">Основные</button>
            <div className="add_form">
              <div className="add__form-body">
                <div className="add_form_item">
                  <label className="label">
                    Название <span className="stars">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={hendelChange}
                    value={product.title}
                    placeholder="Название"
                  />
                </div>
                <div className="add_form_item">
                  <label className="label">
                    Бренд <span className="stars">*</span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    onChange={hendelChange}
                    value={product.brand}
                    placeholder="Бренд"
                  />
                </div>
                <div className="add_form_item">
                  <label className="label">
                    Артикул производителя <span className="stars">*</span>
                  </label>
                  <input
                    type="text"
                    name="discountPercentage"
                    onChange={hendelChange}
                    placeholder="Артикул производителя"
                    value={product.discountPercentage}
                  />
                </div>
              </div>

              <div className="add_form_item1">
                <label className="label">
                  Описание <span className="stars">*</span>
                </label>
                <textarea
                  name="description"
                  onChange={hendelChange}
                  value={product.description}
                  placeholder="Описание"
                ></textarea>
              </div>
              <div className="input_pr">
                <div className="add_form_item2">
                  <label className="label">
                    Цена <span className="stars">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    onChange={hendelChange}
                    value={product.price}
                    placeholder="Цена"
                  />
                </div>
                <div className="add_form_item3">
                  <label className="label">
                    Цена со скидкой <span className="stars">*</span>
                  </label>
                  <input
                    type="text"
                    name="stock"
                    onChange={hendelChange}
                    value={product.stock}
                    placeholder="Цена со скидкой"
                  />
                </div>
              </div>
            </div>
            <button className="save" onClick={save}>
              Сохранить
            </button>
            <button className="close" onClick={closeBtn}>
              Отмена
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
