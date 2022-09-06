import "./posterItem.css"
// import grua from "../../assets/posters/grua.jpg"


function PosterItem({poster}) {

    return (
        <div className="posterItem">
            <img className="posterImage" src={poster.image} alt="imagen_poster" />
            {/* <p className="posterTitle">La Grua</p>
            <p className="posterLocation">Londres, Inglaterra</p>
            <p className="posterYear">2018</p>
            <p className="posterPrice">S/100</p> */}
        </div>
    )
}

export default PosterItem