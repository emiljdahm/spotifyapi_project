import './App.css'
function Card(){





    return (
        <div className="cards">
              <img className="cardimg" src={images[0]}></img>
              <h3 className="artisth3">{artistName}</h3>
              <p className="artistP">{tracks[0]}</p>
            </div>
    )

            




}

export default Card;