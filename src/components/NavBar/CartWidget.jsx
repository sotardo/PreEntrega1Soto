import { PiShoppingCartThin } from "react-icons/pi";
import "./cartWidget.scss"

const CartWidget = () => {
  return (
    <div className="c-widget" >
     <PiShoppingCartThin color="red" size={50} className="icon-cart"/>
    <p className="contador">1</p>
    </div>
  )
}

export default CartWidget