
import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary" > 
  <div className="container-fluid">
    <a className="navbar-brand" href="">
      <img src="https://static.vecteezy.com/system/resources/previews/024/553/853/non_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png" style={{width : "100px"}} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><img src="" alt="" /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Repuestos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contactanos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Fiat</a></li>
            <li><a className="dropdown-item" href="#">Jeep</a></li>
            <li><a className="dropdown-item" href="#">Peugeot</a></li>
            <li><a className="dropdown-item" href="#">Citroen</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
    )

}

export default NavBar