import './App.css'



//components
import {BarraInicial} from './components/barraInicial/barraInicial'
import {Navbar} from './components/navbar/Navbar'
import {Sobre} from './components/Sobre/Sobre'
import {Institucional} from './components/Institucional/Institucional'
import {Gallery} from './components/gallery/Gallery'
import {Servicos} from './components/Serviços/Servicos'
import {Contato} from './components/contato/contato'
import {Localizacao} from './components/localizaçao/Localizacao'
import {Footer} from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <BarraInicial/>
      <Navbar/>
      <Sobre/>
      <Institucional/>
      <Gallery/>
      <Servicos/>
      <Contato/>
      <Localizacao/>
      <Footer/>
    </div>
  )
}

export default App
