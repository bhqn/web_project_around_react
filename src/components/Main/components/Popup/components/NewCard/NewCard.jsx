export default function NewCard() {
  return (
    <form className="form" id="form__place">
              <fieldset className="form__fieldset">
                <div className="form__group form__group-place">
                  <input
                    className="form__input form__input-place"
                    name="place"
                    type="text"
                    placeholder="Título"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                  <small className="form__error"></small>
                </div>
                <div className="form__group">
                  <input
                    className="form__input form__input_src"
                    name="image"
                    type="url"
                    placeholder="Url da Imagem"
                    required
                  />
                  <small className="form__error"></small>
                </div>
              </fieldset>
              <button className="edit__button-save" id="save__place" disabled>
                Salvar
              </button>
            </form>
  )
}