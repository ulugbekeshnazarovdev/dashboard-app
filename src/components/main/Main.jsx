import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Cart from "../card/Card";
import "./Main.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchProduct = () => {
      axios.get("http://localhost:3000/products").then((res) => {
        setData(res?.data);
        setData1(res?.data);
      });
    };
    fetchProduct();
  }, []);

  const search = (e) => {
    let value = e.target.value.toLowerCase();
    const filter = data1?.filter((el) => {
      return (
        el?.title?.toLowerCase().includes(value) ||
        el?.description?.toLowerCase().includes(value) ||
        el?.brand?.toLowerCase().includes(value)
      );
    });
    setData(filter);
  };

  const add = () => {
    navigation("/add");
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="main_w">
            <div className="main_top">
              <h3>Все товары ({data?.length})</h3>
              <div className="search">
                <FaSearch />
                <input type="text" placeholder="Поиск" onChange={search} />
              </div>
            </div>
            <div className="hr">
              <div className="border"></div>
            </div>
            <div className="main_top_item">
              <p>Наименование</p>
              <p>Артикул</p>
              <p>Бренд</p>
              <p>Цена</p>
              <p>Цена со скидкой</p>
            </div>
            <div className="cart_w">
              {data?.map((el, i) => (
                <Cart key={i} {...el} />
              ))}
            </div>
          </div>
          <button className="addBtn" onClick={add}>
            + Новый товар
          </button>
        </div>
      </main>
    </>
  );
};

export default Main;
