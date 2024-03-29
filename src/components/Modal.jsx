import { useGlobalContext } from "../context";

const Modal = () => {
  const { closeModal, selectedMeal } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} className="img modal-img" alt="meal-image" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>
            {" "}
            <b>Cooking Instruction</b>{" "}
          </p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            {" "}
            Original Source
          </a>
          <button
            className="btn btn-hipster close-btn"
            onClick={() => closeModal()}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
