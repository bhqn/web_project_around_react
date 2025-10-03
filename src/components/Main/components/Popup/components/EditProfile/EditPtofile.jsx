export default function EditProfile(){
    return(
         <form className="form">
              <fieldset className="form__fieldset">
                <div className="form__group-name">
                  <input
                    required
                    className="form__input form__input_name"
                    name="name"
                    type="text"
                    placeholder="Nome"
                    minLength="2"
                    maxLength="40"
                  />
                  <small className="form__error"></small>
                </div>
                <div className="form__group-description">
                  <input
                    required
                    className="form__input form__input_description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    minLength="2"
                    maxLength="40"
                  />
                  <small className="form__error"></small>
                </div>
              </fieldset>
              <button className="edit__button-save" disabled>Salvar</button>
            </form>
    );
}