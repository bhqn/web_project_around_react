function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup" id="addCard">
      <div className="popup__card">
        <button
          className="popup__close"
          id="closeAddButton"
          aria-label="Close modal"
          onClick={onClose}
        ></button>
        <h3 className="popup__tittle">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default Popup;
