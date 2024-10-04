import axios from "axios";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ id, price, discountPercentage, brand, stock }) => {
  const navegation = useNavigate();
  const deleteProduct = (id) => {
    if (window.confirm("Delete Product?")) {
      axios.delete(`http://localhost:3000/products/${id}`);
      window.location.reload();
    }
  };

  const editProduct = (id) => {
    navegation(`/edit/${id}`);
  };

  return (
    <div className="cart">
      <p>Товар {id} </p>
      <p>{discountPercentage}</p>
      <p>{brand}</p>
      <p>{price}$</p>
      <p>{stock}$</p>
      <div className="actions">
        <button onClick={() => editProduct(id)}>
          <FaPen />
        </button>
        <button onClick={() => deleteProduct(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Card;
