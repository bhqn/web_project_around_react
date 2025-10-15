import pencil from "../../images/pencil.png";
import perfilImg from "../../images/perfil-image.jpg";
import add from "../../images/add.png";
import { useState, useEffect, useContext } from "react";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import { api } from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";



function Main() {

  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatar = { title: "Editar Avatar", children: <EditAvatar /> };
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([])


 useEffect(() => {
    api.getInitialCards() // ← Chama sua API
      .then((cardsData) => {
        setCards(cardsData); // ← AQUI você define os dados no estado!
      })
      .catch((error) => {
        console.error('Erro ao buscar cartões:', error);
      });
  }, []);




  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__picture-wrapper">
            <img
              className="profile__picture"
              src={currentUser.avatar || perfilImg}
              alt="imagem de perfil"

            />
            <div
              className="profile__overlay"
              onClick={() => handleOpenPopup(editAvatar)}
            >
              <img src={pencil} alt="Editar" className="profile__icon" />
            </div>
          </div>
          <div className="profile__content">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__description">{currentUser.about}</p>
            </div>
            <button
              className="profile__button-edit"
              id="open__button_edit"
              onClick={() => handleOpenPopup(editProfile)}
            >
              <img
                className="profile__button-icon"
                src={pencil}
                alt="botão editar"
              />
            </button>
          </div>
          <button
            className="profile__button-add"
            id="add__button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img className="button-add-icon" src={add} alt="adicionar" />
          </button>
        </section>

        <ul className="gallery" id="gallery-container">
          
            {cards.map((card) => (
              <Card key={card._id} card={card}  handleOpenPopup={handleOpenPopup} />
            ))}
        
        </ul>
       {popup && (
  <Popup
    onClose={handleClosePopup}
    title={popup.title}
    isImagePopup={popup.isImagePopup}
  >
    {popup.children}
  </Popup>
)}
      </main>
    </>
  );
}

export default Main;
