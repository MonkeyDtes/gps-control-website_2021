import "./ButtonHomeAplicaciones.css"

function ButtonHomeAplicaciones({ text, image, onclick, value }) {

  return <>
    <button value={value} onClick={(e) => onclick(e)} className="container--hover__cardsHome">
      <img alt={text} src={image}></img>
      <div>
        <p>{text}</p>
      </div>
    </button>

  </>
}

export default ButtonHomeAplicaciones;