export default function EditAvatar() {
  return (
    <div className="form__group">
      <form className="form" id="avatarForm">
        <input
          className="form__input form__input_src"
          name="avatar"
          type="url"
          placeholder="Url da Imagem"
          required
        />
        <small className="form__error"></small>
        <button className="avatar__button submit">Salvar</button>
      </form>
    </div>
  );
}
