
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenido a mi Ecommerce"/>
      </div>
      
    </>
  )
}

export default App
