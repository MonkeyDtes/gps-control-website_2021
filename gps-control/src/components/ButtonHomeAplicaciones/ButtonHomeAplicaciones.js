import "./ButtonHomeAplicaciones.css"

function ButtonHomeAplicaciones({ text, image }) {

  return <>
    <button className="container--hover__cardsHome">
      <img alt={text} src={image}></img>
      <div>
        <p>{text}</p>
      </div>
    </button>

  </>
}

export default ButtonHomeAplicaciones;