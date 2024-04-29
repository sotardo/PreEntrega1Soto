import "./item.scss"

const ItemListContainer = (props) => {
  return (
    <div>
        <div className="cont-saludo">
        {props.saludo}
        </div>
        
    </div>
  )
}

export default ItemListContainer