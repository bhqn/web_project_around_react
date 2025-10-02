import pencil from '../../images/pencil.png';
import perfilImg from '../../images/perfil-image.jpg';
import add from '../../images/add.png';


function Main(){
return(
    <>
     <main className="main">
        <section className="profile">
          <div className="profile__picture-wrapper">
            <img
              className="profile__picture"
              src={perfilImg}
              alt="imagem de perfil"
            />
            <div className="profile__overlay">
              <img
                src={pencil}
                alt="Editar"
                className="profile__icon"
              />
            </div>
          </div>
          <div className="profile__content">
            <div className="profile__info">
              <h1 className="profile__name">Profile Name</h1>
              <p className="profile__description"></p>
            </div>
            <button className="profile__button-edit" id="open__button_edit">
              <img
                className="profile__button-icon"
                src={pencil}
                alt="botão editar"
              />
            </button>
          </div>
          <button className="profile__button-add" id="add__button">
            <img
              className="button-add-icon"
              src={add}
              alt="adicionar"
            />
          </button>
        </section>

        <div className="gallery" id="gallery-container">
         
        </div>
      </main>
    </>
)
}

export default Main;