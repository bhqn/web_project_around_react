export default function Card() {
     const { name, link, isLiked } = props.card;
    return (
        <div className="gallery__card">
              <button className="card__button-remove"></button>
              <img src="" alt="" className="gallery__image" />
              <div className="card">
                <p className="card__title"></p>
                <button className="card__button"></button>
              </div>
            </div>
    );
}