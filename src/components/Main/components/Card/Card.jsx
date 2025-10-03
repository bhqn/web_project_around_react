import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props; // Recebe a função como prop
  
  // Crie o objeto imageComponent
  const imageComponent = {
    title: null, // ImagePopup não tem título
    children: <ImagePopup card={props.card} />
  };
  
  return (
    <li className="gallery__card">
      <button className="card__button-remove"></button>
      <img 
        src={link} 
        alt="" 
        className="gallery__image" 
        onClick={() => handleOpenPopup(imageComponent)} // Chama a função corretamente
      />
      <div className="card">
        <p className="card__title">{name}</p>
        <button className="card__button">{isLiked}</button>
      </div>
    </li>
  );
}